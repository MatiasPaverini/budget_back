import * as express from 'express';

class CardsController {
    public path = 'cards';
    public router = express.Router();

    private cards: any[] = [
        {
            number: 1234,
            vendor: "Visa", //Change to enum
            bank: "Galicia", //Change to enum
            level: "Platinum" //Change to enum
        },
        {
            number: 5678,
            vendor: "MasterCard", //Change to enum
            bank: "Galicia", //Change to enum
            level: "Platinum" //Change to enum
        }
    ];

    constructor() {
        this.initializeRoutes();
    }

    public initializeRoutes() {
        this.router.get(this.path, this.getAllCards);
        this.router.post(this.path, this.createCard);
    }

    getAllCards = (request: express.Request, response: express.Response) => {
        response.send(this.cards);
    }

    createCard = (request: express.Request, response: express.Response) => {
        const card: any = request.body;
        this.cards.push(card);
        response.send(card);
    }

    patchCard = (request: express.Request, response: express.Response) => {
        //Update card data partially
    }

    updateCard = (request: express.Request, response: express.Response) => {
        //Update card full data
    }

    deleteCard = (request: express.Request, response: express.Response) => {
        //Delete card Data
    }

}

export default CardsController;