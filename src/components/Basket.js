import React from "react";
import Item from "./Item";

const Basket = ({users, deleteFromBasket})=>{
    
    const user = users[0]
    const basket = user.basket

    const click = (itemId)=>{
        deleteFromBasket(itemId)
    }
    const basketObjects = basket.map((item, i)=> {
        return <Item key={item.id} i={i} item={item} text="Delete" click={click} quantity={`Quantity: ${item.quantity}`}/>
    })

    return(
        <>
            <h2>Your Basket</h2>
            <h3>User: {user.name}</h3>
            {basket.length ? null : <h3>Your Basket is empty.</h3>}
            <ul>
                {basketObjects}
            </ul>

        </>

    )
}

export default Basket;