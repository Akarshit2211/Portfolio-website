import React from 'react'
import './navItems.css'

const navItems = (props) => {
    return (
        <li className = "navItem">
            <a className = "navItemLink">{props.children}</a>
        </li>
    )
}

export default navItems;