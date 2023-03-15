import React from "react";
import Item from "./Item";
import styled from "styled-components";

const ItemsDesign = styled.h2`
padding: 1rem;
`

const Flex = styled.ul`
display: flex;
flex-wrap: wrap;
`

const ItemsView = ({items, addToBasket})=>{
    
    const click = (itemId)=>{
        addToBasket(itemId);
    }

    const itemObjects = items.map((item, i)=> {
        return <Item key={item.id} i={i} item={item} text="Add to Basket" click={click} quantity=""/>
    })



    return(
        <>
            <ItemsDesign>Items</ItemsDesign>
            <Flex id="item-view">
                {itemObjects}
            </Flex>
        </>
    )
}

export default ItemsView;