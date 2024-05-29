import {IsNotEmpty, IsString, Length} from "class-validator"
export class ProductDto{ 
    @IsNotEmpty()
    @IsString()
    @Length(4,20)
    name: string

    @IsNotEmpty()
    stock: number

    @IsNotEmpty()
    price: number

    @IsNotEmpty()
    date: string
}