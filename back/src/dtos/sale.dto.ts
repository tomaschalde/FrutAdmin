import { IsNotEmpty,IsString, Length } from "class-validator";

export class SaleDto {

    @IsNotEmpty()
    @IsString()
    @Length(4,20)
    name: string

    @IsNotEmpty()
    date: string
    
    @IsNotEmpty()
    @IsString()
    @Length(4,20)
    nameProduct: string;
  
    @IsNotEmpty()
    quantity: number;
    
    @IsNotEmpty()
    totalPrice: number;
}