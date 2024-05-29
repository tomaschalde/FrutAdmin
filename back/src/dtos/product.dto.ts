import {IsNotEmpty} from "class-validator"
export class ProductDto{ 
    @IsNotEmpty()

    name: string

    @IsNotEmpty()

    stock: number

    @IsNotEmpty()

    price: number

    @IsNotEmpty()

    date: string
}