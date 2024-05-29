import { BadRequestException, Injectable } from "@nestjs/common";
import * as fs from 'fs';
import * as path from 'path';

@Injectable()
export class InventoryRepository {
    private id = 0;

    private readonly productsFile = path.join(__dirname,'products.json');
    constructor() {
        this.ensureProductsFileExists();
    }

    private async ensureProductsFileExists() {
        try {
            await fs.promises.access(this.productsFile);
        } catch (error) {
            await fs.promises.writeFile(this.productsFile, '[]');
            console.log('Archivo products.json creado');
        }
    }

    async getInventory(){
        try {
            const data = await fs.promises.readFile(this.productsFile,'utf-8');
            return JSON.parse(data);
        } catch (error) {
            throw new BadRequestException(`Error: ${error} al leer archivo`)
        }
    }

    async addProduct(name : string, stock : number, price : number, date : string){
        try {
            const data = await fs.promises.readFile(this.productsFile,'utf-8');
            const products = JSON.parse(data);

            const productIndex = products.findIndex(product => product.name === name);

            if(productIndex !== -1){
                products[productIndex].stock += stock;
            }
            else{
                const newProduct = {
                    id: this.id + 1,
                    name: name,
                    stock: stock,
                    price : price,
                    date: date,
                };
    
                products.push(newProduct);
            }
     
            
            await fs.promises.writeFile(this.productsFile, JSON.stringify(products, null, 2));

            return `Producto agregado con exito`
        } catch (error) {
            throw new BadRequestException(`Error: ${error} escribiendo el archivo`)
        }
    }

    async updatedInventory(nameProduct, quantity){
        try {

            const data = await fs.promises.readFile(this.productsFile,'utf-8');
            const products = JSON.parse(data);

            const productIndex = products.findIndex(product => product.name === nameProduct);
            products[productIndex].stock -= quantity;

            await fs.promises.writeFile(this.productsFile, JSON.stringify(products, null, 2));

            return 'Inventario actualizado'
        } catch (error) {
            throw Error(error.message)
        }
    }

    async deleteProduct(id : number){

        try {
            const data = await fs.promises.readFile(this.productsFile,'utf-8');
            const products = JSON.parse(data);
    
            const productIndex = products.findIndex(product => product.id === id);
            if(productIndex === -1) throw new BadRequestException('Producto inexistente')
            
            const productsUpdated = products.filter(product => product.id !== id)
    
            await fs.promises.writeFile(this.productsFile, JSON.stringify(productsUpdated, null, 2));

            return { message: 'Producto eliminado con éxito' };
            
        } catch (error) {
            throw Error(error.message)
        }

    }
}