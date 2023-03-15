import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ItemsView from '../components/ItemsView';
import Basket from '../components/Basket';
import Nav from '../components/Nav';
import Checkout from '../components/Checkout';
import Header from '../components/Header';


const Shop = (()=>{
    const [items, setItems] = useState([
        {name: "Brown Onions (3 Pack)", price: 1.00, weight: 385, id: 1, quantity:1},
        {name: "Swede", price: .80, weight: 400, id: 2, quantity:1},
        {name: "Button Mushrooms", price: 1.25, weight: 400, id: 3, quantity:1},
        {name: "Baking Potatoes", price: .21, weight: 250, id: 4, quantity:1},
        {name: "Carrot", price: .08, weight: 125, id: 5, quantity:1},    
    ]);
    const [users, setUsers] = useState([{
        name: "Chris",
        basket: [],
        discountApplied: false
    }]);

    const [total, setTotal] = useState(0)

    const addToBasket = (itemId)=>{
        const newUsers = [...users]
        const object = items.find((obj)=> obj.id == itemId)
        const userBasket = newUsers[0].basket
        const duplicate = userBasket.find((obj)=>obj == object)
        if (duplicate){
            duplicate.quantity ++
        }
        else{
            const newBasket = [...userBasket, object] 
            newUsers[0].basket = newBasket
        }

        setUsers(newUsers);
        updateTotal();
    }

    const deleteFromBasket = (itemId)=>{
        const newUsers = [...users]
        const object = users[0].basket.find((obj)=> obj.id == itemId)
        if(object.quantity > 1){
            object.quantity --
        }else{
            const toBeRemoved = users[0].basket.indexOf(object)
            newUsers[0].basket.splice(toBeRemoved, 1)
        }
        setUsers(newUsers)
        updateTotal();
    }

    const updateTotal = ()=>{
        const newTotal = users[0].basket.reduce((acc, item)=> acc + (item.price * item.quantity), 0)
        setTotal(newTotal)
    }

    const applyDiscount = ()=>{
        if (total > 0){
        users[0].discountApplied = true;
        const newTotal = total * .9
        setTotal(newTotal)
    }
    }

    return(
        <Router>
            <Header/>
            <Nav items={users[0].basket.length}/>
            <Routes>
                <Route path="/" element={<ItemsView items={items} addToBasket={addToBasket}/>}/>
                <Route path="/basket" element={<Basket users={users} deleteFromBasket={deleteFromBasket}/>}/>
                <Route path="/checkout" element={<Checkout users={users} total={total} applyDiscount={applyDiscount}/>}/>
            </Routes>
        </Router>
    )
})

export default Shop;