import * as express from 'express';

export class CardsController {
    public path = 'cards';

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

    getAllCards (request: express.Request, response: express.Response) {
        return {"status": 200, "cards": this.cards};
    }

    getOneCard(request: express.Request, response: express.Response) {
        return this.cards.filter( card => {
            if (( request.params.id != undefined 
                || request.params.id != null ) 
                && card.number === Number.parseInt(request.params.id)) {
                return card;
            }
        })
    }

    createCard (request: express.Request, response: express.Response) {
        const card: any = request.body;
        this.cards.push(card);
        return card;
    }

    patchCard (request: express.Request, response: express.Response) {
        //Update card data partially
    }

    updateCard (request: express.Request, response: express.Response) {
        //Update card full data
    }

    deleteCard (request: express.Request, response: express.Response) {
        //Delete card Data
    }

}