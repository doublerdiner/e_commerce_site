import React from "react";
import styled from "styled-components";

const CheckoutDesign = styled.h2`
padding: 1rem;
`
const SubCheckoutDesign = styled.h3`
padding: 0 1rem 1rem;
margin: 0;
`

const CheckoutSection = styled.section`
padding: 0 2rem;
`

const Item = styled.li`
border: 1px solid black;
max-width: 30rem;
margin: 0 0 1rem;
padding: 0.5rem 3rem;
list-style-type: none;
`

const Checkout = ({users, total, applyDiscount})=>{

    const user = users[0]
    const basket = user.basket


    const price = basket.map((item)=>{
        const itemPrice = item.price.toFixed(2)

        return (<Item key={item.id}>{item.name}: £{itemPrice} ||<i> quantity: {item.quantity}</i></Item>)
    })

    const handleSubmit = (e)=>{
        e.preventDefault()
        const form = document.querySelector("#form")
        if (e.target[0].value === "discount"){
            applyDiscount()
            form.reset()  
        } else{
            form.reset()  
        }
            
    }


    return(
        <>
        <CheckoutDesign>Checkout</CheckoutDesign>
        <SubCheckoutDesign>User: {user.name}</SubCheckoutDesign>
        {basket.length ? null : <SubCheckoutDesign>Your Basket is empty.</SubCheckoutDesign>}
        <CheckoutSection>
            <ul>
                {price}
            </ul>
            
            {user.discountApplied ? <p>Your 10% discount has been applied</p> : 
            <>
            <p>Enter code: <i>discount</i> to apply a 10% discount</p>
            <form id="form" onSubmit={handleSubmit}>
                <input type="text" />
                <input type="submit"></input>
            </form>
            </>}

            <p>Total: £{total.toFixed(2)}</p>
        </CheckoutSection>
        </>

    )
}

export default Checkout;