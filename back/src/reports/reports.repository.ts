import { Injectable } from "@nestjs/common";
import { InventoryRepository } from "src/inventory/inventory.repository";
import { SalesRepository } from "src/sales/sales.repository";

@Injectable()
export class ReportsRepository {
    constructor(private readonly inventoryRepository : InventoryRepository, private readonly salesRepository : SalesRepository){}

    
    summarySales(periodo : string){
        return periodo
    }

    topSales(){
        const sales = this.salesRepository.getSales()
        const productsSold = []

        sales.forEach(sale => {
                const {name, quantity} = sale.details

                const foundProduct = productsSold.find(p => p.name === name)

                if(foundProduct){
                    foundProduct.quantity += quantity
                }else{
                    productsSold.push({name,quantity})
                }
            
        })

        productsSold.sort((a, b) => b.quantity - a.quantity);

        return productsSold.slice(0, 5)

    }

    async lowStock(){
        const products = await this.inventoryRepository.getInventory()

        return products.map((product) => {
            if(product.stock < 5)
                return product;
        })
    }

    totalRevenue(){
        const sales = this.salesRepository.getSales()
        let total = 0;
        const productsSold = []
        sales.forEach((sale) => {
            productsSold.push(sale.details.name)
            total = total + sale.details.totalPrice
        })
        return {productsSold,total}
    }

    
}