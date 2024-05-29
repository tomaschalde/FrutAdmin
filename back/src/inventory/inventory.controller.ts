import { Body, Controller, Delete, Get, Param, ParseIntPipe, Post } from '@nestjs/common';
import { InventoryService } from './inventory.service';
import { ProductDto } from 'src/dtos/product.dto';

@Controller('inventory')
export class InventoryController {
    constructor(private readonly inventoryService : InventoryService) {}

    @Get()
    checkInventory(){
        return this.inventoryService.checkInventory();
    }

    @Post()
    addProduct(@Body() product : ProductDto) {
        const {name, stock, price, date} = product
        return this.inventoryService.addProduct(name,stock,price,date)
    }

    @Delete(':id')
    deleteProduct(@Param('id', ParseIntPipe) id : number) {
        return this.inventoryService.deleteProduct(id)
    }

}
