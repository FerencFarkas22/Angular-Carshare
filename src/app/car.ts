import { Owner } from "./owner";

export class Car {
    public id: string='';
    public cityFrom: string ='';
    public cityTo: string = '';
    public date: string = '';
    public km: number = 0;
    public allCarClass: number = 0;
    public owner: Owner = new Owner;
}
