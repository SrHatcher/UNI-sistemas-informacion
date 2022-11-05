import {IsNotEmpty, Length, IsOptional} from 'class-validator'

export class CreateCategoryDto{

    @Length(3, 50)
    @IsNotEmpty()
    name: string;

    @Length(10, 250)
    @IsOptional()
    description: string;
    //instalamos un paquete llamado: classvalidator, y otro llamado: class transformer
    //npm i class-validator
    //npm i class-transformer

}