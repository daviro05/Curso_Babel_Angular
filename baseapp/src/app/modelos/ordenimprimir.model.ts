import { Impresora, DptoIf, UserIf } from './master.model';

export interface OrdenImprimirIf {
    user: UserIf;
    printer: Impresora;
    isColor: boolean;
    icClaro: boolean;
    dpto: DptoIf;
}


