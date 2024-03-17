"use strict";
//*interfaces   same as type alias
const product = {
    name: "adi",
    price: 100,
    quantity: 2
};
const caltotal = (product) => {
    return product.price * product.quantity;
};
console.log(caltotal(product));
console.log(caltotal(product));
