import React from 'react'
import './Navbar.css'
import Logo from '../../UI/Logo/Logo';
import NavItem from '../../UI/navItems/navItems'

const navbar = () => {
    return (
        <div className = "navbar">
            <Logo />
            <ul className = "navItems">
                <NavItem>Projects</NavItem>
                <NavItem>About</NavItem>
                <NavItem>Contact</NavItem>
            </ul>
        </div>
    )
}

export default navbar;