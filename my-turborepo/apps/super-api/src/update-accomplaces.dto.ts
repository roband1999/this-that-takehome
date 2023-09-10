import { IsNotEmpty, IsArray, IsNumber } from "@nestjs/class-validator";

export class UpdateAccomplaces {
    @IsNotEmpty()
    @IsArray()
    @IsNumber({}, { each: true })
    accomplaces: number[];
}