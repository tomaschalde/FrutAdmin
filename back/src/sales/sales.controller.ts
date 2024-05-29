import { Body, Controller, Get, Post } from '@nestjs/common';
import { SalesService } from './sales.service';
import { SaleDto } from 'src/dtos/sale.dto';

@Controller('sales')
export class SalesController {
    constructor(private readonly salesServices : SalesService){}

    @Get()
    getSales(){
        return this.salesServices.getSales();
    }
    
    @Post()
    registerSale(@Body() sale : SaleDto) {
        const {name, date, nameProduct, quantity, totalPrice} = sale
        return this.salesServices.registerSale(name,date,nameProduct, quantity, totalPrice);
    }
}
