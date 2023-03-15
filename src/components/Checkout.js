import React, {useState} from "react";

const Checkout = ({users, total, applyDiscount})=>{

    const user = users[0]
    const basket = user.basket


    const price = basket.map((item)=>{
        const itemPrice = item.price.toFixed(2)

        return (<li key={item.id}>{item.name}: £{itemPrice}<p><i>quantity: {item.quantity}</i></p></li>)
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
            <h2>Checkout</h2>
            <h3>User: {user.name}</h3>
            {basket.length ? null : <h3>Your Basket is empty.</h3>}
            <p>Enter code: <i>discount</i> to apply a 10% discount</p>
            <ul>
                {price}
            </ul>
            {user.discountApplied ? <p>Your 10% discount has been applied</p> : 
            <form id="form" onSubmit={handleSubmit}>
                <input type="text" />
                <input type="submit"></input>
            </form>}
            <p>Total: £{total.toFixed(2)}</p>

        </>

    )
}

export default Checkout;