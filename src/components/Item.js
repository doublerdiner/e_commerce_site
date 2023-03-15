import React from "react";

const Item = ({item, text, click, quantity})=>{
    
    const handleClick = (e)=>{
        click(e.target.value)
    }

    const price = item.price.toFixed(2);

    console.log()

    return(
        <li>
            <h3>{item.name}</h3>
            <hr/>
            <p>£{price}</p>
            <p>{item.weight}g</p>
            <p>{quantity}</p>
            <button value={item.id} onClick={handleClick}>{text}</button>
        </li>
    )
}

export default Item;