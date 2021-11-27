import * as express from 'express';
import CardsController from './controllers/cardsController';
import ExpensesController from './controllers/expensesController';
import InstallmentsController from './controllers/installmentsController';
import InvestmentsController from './controllers/investmentsController';
import UsersController from "./controllers/usersController";
const router = express.Router();

const basePath = ""


router.get('/', (request, response) => {
});

router.post('/', (request, response) => {

});

export default router;