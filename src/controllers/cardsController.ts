import * as express from 'express';
import { ICardService } from "../services/cardsService";

export class CardsController {

    private service: ICardService;

    constructor(cardsService: ICardService) {
        this.service = cardsService;
    }

    public path = 'cards';

    getAllCards (request: express.Request, response: express.Response) {
       
        return {"status": 200, "cards":  this.service.getAll()};
    }

    getOneCard(request: express.Request, response: express.Response) {
        return {"status": 200, 
        "card": this.service.getOne(Number.parseInt(request.params.id))}
    }

    createCard (request: express.Request, response: express.Response) {
        const card: any = request.body;
        this.service.save(card);
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