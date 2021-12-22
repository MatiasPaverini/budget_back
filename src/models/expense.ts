
export class Expense {

    private owner: string;
    private installments: number;
    private date: Date;
    private amount: number;
    private shared: boolean;
    private paymentMethod: string; //should use an enum as type

    constructor(owner: string, installments: number, date: Date, amount: number, shared: boolean, paymentMethod: string) {
        this.owner = owner;
        this.installments = installments;
        this.date = date;
        this.amount = amount;
        this.shared = shared;
        this.paymentMethod = paymentMethod;
    }
}