
export interface IExpensesService {

    getOne(id: number): any;
    getAll(): any;
    save(card:any): any;
    patch(id: number): any;
    put(id: number): any;
    delete(id: number): any;
}