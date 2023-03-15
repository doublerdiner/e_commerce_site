import React from "react";
import Item from "./Item";
import styled from "styled-components";

const BasketDesign = styled.h2`
padding: 1rem;
`
const SubBasketDesign = styled.h3`
padding: 0 1rem 1rem;
margin: 0;
`

const Flex = styled.ul`
display: flex;
flex-wrap: wrap;
`

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
            <BasketDesign>Your Basket</BasketDesign>
            <SubBasketDesign>User: {user.name}</SubBasketDesign>
            {basket.length ? null : <SubBasketDesign>Your Basket is empty.</SubBasketDesign>}
            <Flex>
                {basketObjects}
            </Flex>

        </>

    )
}

export default Basket;