import { IsNotEmpty, IsArray, IsNumber } from "@nestjs/class-validator";

export class UpdateAccomplaces {
    @IsNotEmpty()
    @IsNumber()
    heroId: number;

    @IsNotEmpty()
    @IsArray()
    @IsNumber({}, { each: true })
    accomplaces: number[];
}