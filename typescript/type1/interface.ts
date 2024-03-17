//*interfaces   same as type alias

//build a contract or design of a boject

interface Product{
    name:string;
    price:number;
    quantity:number
}

const product:Product={
    name:"adi",
    price:100,
    quantity:2
}
const caltotal=(product:Product)=>{
    return product.price*product.quantity;

}
console.log(caltotal(product));
console.log(caltotal(product));
