import { Card } from "../../models/card";
import { Cards } from "../../models/cards";
import { ICardService } from "../cardsService";

export class CardsServicesImpl implements ICardService {

    private cards: Cards = new Cards("Matías",
    [new Card(
            1234,
            "Visa", //Change to enum
            "Galicia", //Change to enum
            "Platinum" //Change to enum
    ),
    new Card(
            5678,
            "MasterCard", //Change to enum
            "Galicia", //Change to enum
            "Platinum" //Change to enum
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