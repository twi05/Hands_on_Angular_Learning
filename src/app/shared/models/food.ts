export class Food{
    id!:string;  //! means required
    name!:string;
    price!:number;
    tags?:string[];
    favorite!:boolean;
    stars!:number;
    imageUrl!:string;
    origins!:string[];
    cookTime!:string;
}