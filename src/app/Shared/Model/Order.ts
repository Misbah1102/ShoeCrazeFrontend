import { CartItem } from "./cartitem";

export class Order{
 
    id!:number;
    items!:CartItem[];
    totalPrice!:number;
    name!:string;
    paymentId!:string;
    createdAt!:string;
    status!:string;


}