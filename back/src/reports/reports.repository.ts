import { Injectable } from "@nestjs/common";
import { InventoryRepository } from "src/inventory/inventory.repository";
import { SalesRepository } from "src/sales/sales.repository";

@Injectable()
export class ReportsRepository {
    constructor(private readonly inventoryRepository : InventoryRepository, private readonly salesRepository : SalesRepository){}

    
    productsMoreSold(){
        return 0

    }

    
}