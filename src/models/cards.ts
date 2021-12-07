import { Card } from "./card";

export class Cards {
    
    private cardHolder: string;
    private cards: Card[];

    constructor(cardHolder: string, cards: Card[]) {
        this.cards = cards;
        this.cardHolder = cardHolder;
    }
    
    public get getCardHolder() : string {
        return this.cardHolder;
    }

    
    public get getCards() : Card[] {
        return this.cards;
    }

    
    public set setCards(v : Card[]) {
        this.cards = v;
    }

    
    public set setCardHolder(v : string) {
        this.cardHolder = v;
    }
    
    
    
    
}