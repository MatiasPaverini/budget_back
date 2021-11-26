
import App from './app';
import CardsController from './controllers/cardsController';
import InstallmentsController from "./controllers/installmentsController";
 
const app = new App(
  [
    new CardsController(),
    new InstallmentsController(),
  ],
  3500,
);
 
app.listen();