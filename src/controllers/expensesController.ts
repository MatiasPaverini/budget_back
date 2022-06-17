import * as express from 'express';
import { IExpensesService } from '../services/expensesService';

class ExpensesController {

    private expensesService: IExpensesService;

    constructor(expensesService: IExpensesService) {
        this.expensesService = expensesService;
    }

    getAllExpenses (request: express.Request, response: express.Response) {
       
        return {"status": 200, "expenses":  this.expensesService.getAll()};
    }

    getOneExpense(request: express.Request, response: express.Response) {
        return {"status": 200, 
        "expense": this.expensesService.getOne(Number.parseInt(request.params.id))}
    }
}

export default ExpensesController;