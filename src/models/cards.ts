import { Card } from "./card";

export class Cards {
    
    private cardHolderName: string;
    private cardHolderSurname: string;
    private cards: Card[];

    constructor(cardHolderName: string, cardHolderSurname: string, cards: Card[]) {
        this.cards = cards;
        this.cardHolderName = cardHolderName;
        this.cardHolderSurname = cardHolderSurname;
    }
    
    public get getCardHolderName() : string {
        return this.cardHolderName;
    }

    public get getCardHolderSurname() : string {
        return this.cardHolderSurname;
    }
    
    public get getCards() : Card[] {
        return this.cards;
    }

    
    public set setCards(v : Card[]) {
        this.cards = v;
    }

    
    public set setCardHolderName(v : string) {
        this.cardHolderName = v;
    }
    
    public set setCardHolderSurname(v: string) {
        this.cardHolderSurname = v;
    }
    
    
}