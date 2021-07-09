import React, { Component, useState } from 'react';
import styled from 'styled-components';
import MenuIcon from '@material-ui/icons/Menu';
import CloseIcon from '@material-ui/icons/Close';

class header extends Component {
    state = {  }
    render() { 
        return ( 
            <Container>
                <a>
                    <img src="images/logo.svg" />
                </a>
                <Menu>
                    <a href="#">Model S</a>
                    <a href="#">Model 3</a>
                    <a href="#">Model X</a>
                    <a href="#">Model Y</a>
                </Menu>

                <RightMenu>
                    <a href="#">Shop</a>
                    <a href="#">Tesla Account</a>
                    <CustomMenu />
                </RightMenu>

                <BrugerNav>
                    <CloseButtonWrapper>
                        <CustomClose/>
                    </CloseButtonWrapper>

                    
                    <li><a href="#">Existing Inventory</a></li>
                    <li><a href="#">Used Inventory</a></li>
                    <li><a href="#">Trade In</a></li>
                    <li><a href="#">Cybertruck</a></li>
                    <li><a href="#">Roadster</a></li>
                    <li><a href="#">Existing Inventory</a></li>
                    <li><a href="#">Existing Inventory</a></li>
                    <li><a href="#">Existing Inventory</a></li>
                    <li><a href="#">Existing Inventory</a></li>
                    <li><a href="#">Existing Inventory</a></li>
                </BrugerNav>
            </Container>
         );
    }
}
 
export default header;

const Container = styled.div`
    min-height: 60px;
    position fixed;
    display: flex;
    align-items: center;
    padding: 0 20px;
    width: 100%;
    justify-content: space-between;
    z-index: 1;

`

const Menu = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    flex: 1;

    a {
        font-weight: 600;
        text-transform: uppercase;
        padding: 0 10px 0 10px;
        flex-wrap: nowrap;
    }

    @media (max-width: 900px){
        display:none;
    }
    
`

const RightMenu = styled.div` 
    display: flex;
    align-items: center;
    cursor: pointer;


    a {
        font-weight: 600;
        text-transform: uppercase;
        flex-wrap: nowrap;
        margin-right: 10px;
    }
`

const CustomMenu = styled(MenuIcon)`

`

const BrugerNav = styled.div`
    position: fixed;
    top: 0;
    bottom: 0;
    right: 0;
    background: white;
    width: 300px;
    list-style: none;
    padding: 20px;
    text-align: left;

    li {
        padding: 15px 0;
        border-bottom: 1px solid rgba(0,0,0,.2);
    }

    a {
        font-weight: 600;
    }
`

const CustomClose = styled(CloseIcon)``

const CloseButtonWrapper = styled.div`
    display: flex;
    justify-content: flex-end;
    cursor: pointer;
`