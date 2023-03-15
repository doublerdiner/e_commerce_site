import React from "react";
import styled from "styled-components";

const HeaderLogo = styled.h1`
  text-align: center;
  color: white;
  background-color: rgb(53, 142, 109);
  margin: 0;
  padding: 2rem;
`


const Header = ()=>{
    return(
        <>
            <HeaderLogo>The Online Greengrocer</HeaderLogo>
        </>

    )
}

export default Header;