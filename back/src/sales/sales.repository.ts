import { BadRequestException, Injectable } from "@nestjs/common";

import { InventoryRepository } from "src/inventory/inventory.repository";

const sales = [];

@Injectable()
export class SalesRepository{
    private allSales = sales;

    constructor(private readonly inventoryRepository : InventoryRepository) {}

    async addSale(name : string , date : string , nameProduct : string , quantity : number) {
        try {

                const products = await this.inventoryRepository.getInventory()
                if(products.length < 1) throw new BadRequestException('No hay productos cargados')
                
                const productIndex = products.findIndex(product => product.name === nameProduct);
                if(productIndex === -1) throw new BadRequestException(`El producto ${nameProduct} no existe`);

                if(products[productIndex].stock >= 1 && products[productIndex].stock - quantity >= 0){

                    this.inventoryRepository.updatedInventory(nameProduct, quantity)
            
                }
                else{
                    throw new BadRequestException(`La cantidad deseada supera el stock`)
                }

            const newSale = {
                client: name,
                date: date,
                details: {
                    name: nameProduct,
                    quantity: quantity,
                    totalPrice: quantity * products[productIndex].price
                }
            }

            this.allSales.push(newSale);

            return 'Venta registrada'

        } catch (error) {
            throw error
        }
    }

    getSales(){
        return this.allSales;
    }
}