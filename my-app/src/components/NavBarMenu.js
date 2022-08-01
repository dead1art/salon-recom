import styled from 'styled-components'
import { NavLink as Link } from 'react-router-dom'
import { FaBars } from 'react-icons/fa'

export const Nav = styled.nav`
    background: #FFFFFF;
    height: 55px;
    display: flex;
    justify-content: space-between;
    padding-top: 3rem;
    padding-bottom: 3rem;
    z-index: 10;
`
export const NavLink = styled(Link)`
    color: #241F1F;
    display: flex;
    font-size: 17px;
    align-items: center;
    text-decoration: none;
    padding: 0 1rem;
    height: 94%;
    cursor: pointer;

    &.active {
        color: #7a4241;
    }
`

export const Bars = styled(FaBars)`
    display: none;
    color: #241F1F;

    @media screen and (max-width: 768px) {
        display: flex;
        position: absolute;
        top: 12px;
        right: 12px;
        transform: translate(-100%, 75%);
        font-size: 2rem;
        cursor: pointer;
    }
`

export const NavMenu = styled.div`
    display: flex;
    align-items: center;
    margin: 4px;
    cursor: pointer;
    
    @media screen and (max-width: 768px) {
        display: none;
    }
`
export const NavBtn = styled.nav`
    display: flex;
    align-items: center;
    margin-right: 24px;

    @media screen and (max-width: 768px) {
        display: none;
    }
`

export const NavBtnLink = styled(Link)`
    border-radius: 4px;
    background: #D8A7A7;
    padding: 10px 19px 10px 20px;
    color: #FFFFFF; 
    font-size: 16px;
    font-weight: 400;
    border-radius: 23px;
    /* border: solid #C4C4C4 2px; */
    outline: none;
    cursor: pointer;
    transition: all 0.2s ease-in-out;
    text-decoration: none;

    &:hover{
        transition: all 0.2s ease-in-out;
        background: #000000;
        color: #FFFFFF;
    }
`