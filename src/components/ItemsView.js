import React from "react";
import Item from "./Item";

const ItemsView = ({items, addToBasket})=>{
    
    const click = (itemId)=>{
        addToBasket(itemId);
    }

    const itemObjects = items.map((item, i)=> {
        return <Item key={item.id} i={i} item={item} text="Add to Basket" click={click} quantity=""/>
    })



    return(
        <>
            <h2>Items</h2>
            <ul>
                {itemObjects}
            </ul>
        </>
    )
}

export default ItemsView;