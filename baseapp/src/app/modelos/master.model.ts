export class Impresora implements ImpresoraIf {

    constructor(public id: string, public name: string) {}
}

/* export class Impresora2 {
    public id: string;
    public name: string;
    constructor(id: string , name: string) {
        this.id = id;
        this.name = name;
    }
} */

export interface ImpresoraIf {
    id: string;
    name: string;
}

export interface DptoIf {
    id: string;
    name: string;
}

export interface UserIf {
    nombre: string;
    apellidos: string;
    telefono: string;
}
