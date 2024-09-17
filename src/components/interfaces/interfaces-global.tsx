export interface ResponseHelper {
    success: boolean;
    message: string;
    data: any;
}

export interface Formulario {
    id?: number;
    nombre: string;
    edad: number;
    esEstudiante : boolean;
    direccion: string;
    hobbie: string;
    EsBorrado:boolean;
}