//quais ações o carrinho vai fazer
// assinaturas dos metodos -> adicionar item, deletar item, remover, calcular o total


async function addItem(userCart, item){
    userCart.push(item)
}

async function calculateTotal(userCart){
    //reduce -> array.reduce((total,item)=>total + item.subtotal(),0)
    //total -> 0
    //item -> 1
    // o valor atual, o item recorrente para cada interação e o valor inicial que é 0 

    console.log( `\n🛒 total a pagar:  ${userCart.reduce((total,item)=>total + item.subtotal(),0)} 💵 \n`)
}

async function deleteItem(userCart,name){
    const index = userCart.findIndex((item)=>item.name === name);

    //se o index for diferente de -1, significa que o item existe
    //se o index for igual a -1, significa que o item não existe
    if(index !== -1){

        console.log(`\n ❌ item ${name} removido do carrinho \n`)
        userCart.splice(index,1)
    }
}


async function displayCart(userCart){
    userCart.forEach((element,index) => {
        console.log(`(0${index + 1}) -  📖 Produto : ${element.quantity}x - ${element.name} -  ${element.price} R$`)
    });
    
}

async function removeItem(userCart, index){
    const deleteIndex = index -1
    if (index >= 0 && index < userCart.length) {
        userCart.splice(deleteIndex,1)
    }

    
}



export {
    addItem,
    calculateTotal,
    deleteItem,
    removeItem,
    displayCart
}