

export class Card {

    private id: number;
    private vendor: string;
    private level: string;
    private bank: string;

    constructor(id: number, vendor: string, bank: string, level: string) {
        this.id = id;
        this.vendor = vendor;
        this.level = level;
        this.bank = bank;
    }

    
    public get getId() : number {
        return this.id;
    }
    

}