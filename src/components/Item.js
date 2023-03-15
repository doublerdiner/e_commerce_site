import React from "react";
import styled from "styled-components";

const ItemDesign = styled.li`
border: 1px solid black;
border-radius: 10px;
min-width: 15rem;
min-height: 15rem;
margin: 0 5rem 2rem 0;
padding: 0.5rem 3rem;
list-style-type: none;
`

const Item = ({item, text, click, quantity})=>{
    
    const handleClick = (e)=>{
        click(e.target.value)
    }

    const price = item.price.toFixed(2);

    console.log()

    return(
        <ItemDesign>
            <h3>{item.name}</h3>
            <hr/>
            <p>£{price}</p>
            <p>{item.weight}g</p>
            <p>{quantity}</p>
            <button id="button" value={item.id} onClick={handleClick}>{text}</button>
        </ItemDesign>
    )
}

export default Item;