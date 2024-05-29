import { Injectable } from '@nestjs/common';
import { InventoryRepository } from './inventory.repository';


@Injectable()
export class InventoryService {
    constructor(private readonly inventoryRepository : InventoryRepository){}

    checkInventory(){
        return this.inventoryRepository.getInventory();
    }

    addProduct(name : string, stock : number, price : number, date : string){
        return this.inventoryRepository.addProduct(name,stock,price,date)
    }

    deleteProduct(id : number){
        return this.inventoryRepository.deleteProduct(id)
    }
}
