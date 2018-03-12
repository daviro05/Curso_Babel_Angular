import { UserIf } from './master.model';


export interface User {
    nombre: string;
    apellido: string;
    telefono: string;
}

export interface Contacto extends User  {
    // nombre: string;
    // apellido: string;
    // telefono: string;
    email: string;
    id: number;
}
