import { Impresora, DptoIf } from './master.model';

export const Impresoras: Array<Impresora> = [
    {id: '1', name: 'HP'},
    new Impresora('2', 'Brother'),
    new Impresora('3', 'Canon')
];

export const Dptos: Array<DptoIf> = [
    {id: '1' , name: 'RRHH'},
    {id: '2' , name: 'Ventas'},
    {id: '3' , name: 'Marketing'},
    {id: '4' , name: 'Sistemas'}
];

