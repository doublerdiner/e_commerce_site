import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const NavDesign = styled.ul`
display: flex;
margin: 0;
padding: 0;
background-color: rgb(53, 142, 109, .5);
`
const LinkDesign = styled.li`
padding: 0.5rem 3rem;
list-style-type: none;
&:hover{
    background-color: lightgrey;
}
`

const Nav = ({items})=>{
    return(
        <nav>
            <NavDesign>
                <LinkDesign><Link to="/">Home</Link></LinkDesign>
                <LinkDesign><Link id="nav-basket" to="/basket">Basket: {items}</Link></LinkDesign>
                <LinkDesign><Link to="/checkout">Checkout</Link></LinkDesign>
            </NavDesign>
        </nav>
    )
}

export default Nav;