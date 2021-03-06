import * as express from 'express';
import { CardsController } from '../controllers/cardsController';
import ExpensesController from '../controllers/expensesController';
import InvestmentsController from '../controllers/investmentsController';
import UsersController from "../controllers/usersController";
import morgan from "morgan";
import { CardsServicesImpl } from '../services/impl/cardsServicesImpl';
import { ExpensesServiceImpl } from '../services/impl/expensesServiceImpl';
const router = express.Router();

const basePath = "/v1"

//Logging
//router.use(morgan.dev);

// Parse the request 
router.use(express.urlencoded({ extended: false }));

// Takes care of JSON data
router.use(express.json());

router.use((req: any, res: any, next: any) => {
    
    // set the CORS policy
    res.header('Access-Control-Allow-Origin', '*');
    // set the CORS headers
    res.header('Access-Control-Allow-Headers', 'origin, X-Requested-With,Content-Type,Accept, Authorization');
    // set the CORS method headers
    if (req.method === 'OPTIONS') {
        res.header('Access-Control-Allow-Methods', 'GET PATCH DELETE POST');
        return res.status(200).json({});
    }
    next();
});

//Credit Cards

//Get one
router.get('/credit-cards/:id', (request: any, response: any) => {
    const cards: CardsController = new CardsController(new CardsServicesImpl);
    const resp: any = cards.getOneCard(request, response);
    response.send(JSON.stringify(resp));
});

//Get All
router.get('/credit-cards', (request, response) => {
    const cards: CardsController = new CardsController(new CardsServicesImpl);
    const resp: any = cards.getAllCards(request, response);
    response.send(JSON.stringify(resp));
});


//Create new card
router.post('/credit-cards/:id', (request, response) => {
    const cards: CardsController = new CardsController(new CardsServicesImpl);
    const resp: any = cards.createCard(request, response);
    response.send(JSON.stringify(resp));
});

router.patch('/credit-cards/:id', (request, response) => {
    const cards: CardsController = new CardsController(new CardsServicesImpl);
    const resp: any = cards.patchCard(request, response);
    response.send(JSON.stringify(resp));
});

router.put('/credit-cards/:id', (request, response) => {
    const cards: CardsController = new CardsController(new CardsServicesImpl);
    const resp: any = cards.updateCard(request, response);
    response.send(JSON.stringify(resp));
});

router.delete('/credit-cards/:id', (request, response) => {
    const cards: CardsController = new CardsController(new CardsServicesImpl);
    const resp: any = cards.deleteCard(request, response);
    response.send(JSON.stringify(resp));
});


//Installments

router.get('/installments', (request, response) => {
});

router.post('/installments', (request, response) => {

});

router.patch('/installments', (request, response) => {
});

router.put('/installments', (request, response) => {

});

router.delete('/installments', (request, response) => {
});

//Investments

router.get('/investments', (request, response) => {
});

router.post('/insvestments', (request, response) => {

});

router.patch('/investments', (request, response) => {
});

router.put('/investments', (request, response) => {

});

router.delete('/investments', (request, response) => {
});

//Expenses

//Get one
router.get('/expenses/:id', (request: any, response: any) => {
    const expenses: ExpensesController = new ExpensesController(new ExpensesServiceImpl);
    const resp: any = expenses.getOneExpense(request, response);
    response.send(JSON.stringify(resp));
});

router.get('/expenses', (request, response) => {
    const expenses: ExpensesController = new ExpensesController(new ExpensesServiceImpl);
    const resp: any = expenses.getAllExpenses(request, response);
    response.send(JSON.stringify(resp));
});

router.post('/expenses', (request, response) => {

});

router.patch('/expenses', (request, response) => {
});

router.put('/expenses', (request, response) => {

});

router.delete('/expenses', (request, response) => {
});
//Users

router.get('/users', (request, response) => {
});

router.post('/users', (request, response) => {

});

router.patch('/users', (request, response) => {
});

router.put('/users', (request, response) => {

});

router.delete('/users', (request, response) => {
});

//Misc

router.get('/', (request, response) => {

});

router.get('/ping', (request, response) => {

});

router.get('/health', (request, response) => {

});


/** Error handling */
router.use((req, res, next) => {
    const error = new Error('not found');
    return res.status(404).json({
        message: error.message
    });
});


export default router;