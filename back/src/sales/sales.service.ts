import { Injectable } from '@nestjs/common';
import { SalesRepository } from './sales.repository';


@Injectable()
export class SalesService {
    constructor(private readonly salesRepository : SalesRepository){}

    registerSale(name : string , date : string , nameProduct : string , quantity : number, totalPrice : number) {
        return this.salesRepository.addSale(name,date,nameProduct,quantity,totalPrice);
    }

    getSales(){
        return this.salesRepository.getSales();
    }
}
