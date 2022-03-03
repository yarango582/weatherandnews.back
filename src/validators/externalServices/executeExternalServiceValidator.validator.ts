import { IsNotEmpty, IsString } from "class-validator";


export class executeExternalServiceValidator {

    @IsNotEmpty({ message: "El campo no puede estar vacio" })
    @IsString({ message: "Solo es permitido el parametro name como texto" })
    nameService: string;

    @IsNotEmpty({ message: "El campo no puede estar vacio" })
    @IsString({ message: "Solo es permitido el parametro name como texto" })
    dependency: string;
}