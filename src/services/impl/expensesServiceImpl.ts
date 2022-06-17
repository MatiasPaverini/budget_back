import { Card } from "../../models/card";
import { Cards } from "../../models/cards";
import { Banks } from "../../models/enums/banks";
import { CardAffiliation } from "../../models/enums/cardAffiliation";
import { CardTypes } from "../../models/enums/cardTypes";
import { ExpenseGroup } from "../../models/enums/expenseGroup";
import { IExpensesService } from "../expensesService";
export class ExpensesServiceImpl implements IExpensesService {
    
    private expenses: any =[{
        id: 12334,
        month: "Jun",
        year: 2022,
        total: 1000,
        description: "test",
        type: ExpenseGroup.HOUSE,
        payed_with: CardTypes.DEBIT,
        card: new Card(1234, CardAffiliation.VISA, Banks.GALICIA, CardTypes.DEBIT)
    }]

    getOne(id: number) {
        return this.expenses.filter( (expense: any) => {
            if ((id != undefined || id != null) &&
            expense.id === id ) {
                return expense;
            }
        })
    }
    getAll() {
        return this.expenses;
    }
    save(card: any) {
        throw new Error("Method not implemented.");
    }
    patch(id: number) {
        throw new Error("Method not implemented.");
    }
    put(id: number) {
        throw new Error("Method not implemented.");
    }
    delete(id: number) {
        throw new Error("Method not implemented.");
    }

}