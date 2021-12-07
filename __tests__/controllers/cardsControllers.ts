import 'mocha';
import { expect,  } from 'chai';
import { CardsController } from "../../src/controllers/cardsController";
import * as express from 'express';
import Sinon from "sinon";

describe("Cards controller tests", () => {

    it("Should return all cards", () => {
        const controller = new CardsController();
        
        const resp: express.Response = <express.Response> <any> (Sinon.mock());
        const req: express.Request = <express.Request> <any> (Sinon.mock());
        const result = controller.getAllCards(req, resp);

        expect(result.status).to.be.equal(200);
        expect(result.cards).to.be.instanceOf(Array);
    });

    it("Should return one cards", () => {
        const controller = new CardsController();
        
        const resp: express.Response = <express.Response> <any> (Sinon.mock());
        const req: express.Request = <express.Request> <any> (Sinon.mock());
        const result = controller.getOneCard(req, resp);

        //expect(result.status).to.be.equal(200);
        //expect(result.cards).to.be.instanceOf(Array);
    });

    it("Should create a card", () => {
        const controller = new CardsController();
        
        const resp: express.Response = <express.Response> <any> (Sinon.mock());
        const req: express.Request = <express.Request> <any> (Sinon.mock());
        const result = controller.createCard(req, resp);

        //expect(result.status).to.be.equal(200);
        //expect(result.cards).to.be.instanceOf(Array);
    });

    it("Should patch a card", () => {
        const controller = new CardsController();
        
        const resp: express.Response = <express.Response> <any> (Sinon.mock());
        const req: express.Request = <express.Request> <any> (Sinon.mock());
        const result = controller.getAllCards(req, resp);

        
    });

    it("Should update a card", () => {
        const controller = new CardsController();
        
        const resp: express.Response = <express.Response> <any> (Sinon.mock());
        const req: express.Request = <express.Request> <any> (Sinon.mock());
        const result = controller.getAllCards(req, resp);

    
    });

    it("Should delete a card", () => {
        const controller = new CardsController();
        
        const resp: express.Response = <express.Response> <any> (Sinon.mock());
        const req: express.Request = <express.Request> <any> (Sinon.mock());
        const result = controller.getAllCards(req, resp);

    
    });
})