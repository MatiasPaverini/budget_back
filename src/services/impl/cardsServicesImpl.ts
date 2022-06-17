import { Card } from "../../models/card";
import { Cards } from "../../models/cards";
import { Banks } from "../../models/enums/banks";
import { CardAffiliation } from "../../models/enums/cardAffiliation";
import { CardTypes } from "../../models/enums/cardTypes";
import { ICardService } from "../cardsService";

export class CardsServicesImpl implements ICardService {

    private cards: Cards = new Cards("Matías", "Paverini",
    [new Card(
            1234,
            CardAffiliation.VISA, 
            Banks.GALICIA,
            CardTypes.PLATINUM 
    ),
    new Card(
            5678,
            CardAffiliation.MASTERCARD,
            Banks.GALICIA, 
           CardTypes.PLATINUM 
    )
    ]);

    getOne(id: number): Card {
        return this.cards.getCards.filter( (card: Card) => {
            if ((id != undefined 
                ||id != null ) 
              && card.getId === id) {
             return card;
         }
            else {
             return null;
         }
        })[0]
    }
    
    getAll(): any {
        return this.cards.getCards;
    }
    
    save(card:any): any {

    }
    
    patch(id: number): any {

    }
    
    put(id: number): any {

    }
    
    delete(id: number): any {

    }

}