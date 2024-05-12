import createItem from "./services/item.js";
import * as CartService from "./services/cart.js";

const myCart = []
const myWishList = []

console.log("\n## Welcome to the Shopee Cart 🏪 ##\n" );

const item1 = await createItem("Livro: Mandando embora seu chefe",20.99,1)
const item2 = await createItem("Livro: A arte da sabotagem",22.99,3)

await CartService.addItem(myCart, item1)
await CartService.addItem(myCart, item2)
// await CartService.deleteItem(myCart,item1.name)
await CartService.displayCart(myCart)


await CartService.calculateTotal(myCart)