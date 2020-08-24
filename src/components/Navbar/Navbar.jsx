import React from 'react';
import s from './Navbar.module.css';
import {NavLink} from "react-router-dom";

const Navbar = () => {
    return (
        <nav className={`${s.nav} ${s.categoryWrap}`}>
            <ul >
                <li><NavLink to="/profile" activeClassName={s.activeLink}>Profile</NavLink></li>
                <li><NavLink to="/dialogs" activeClassName={s.activeLink}>Messages</NavLink></li>
                <li> <NavLink to="/users" activeClassName={s.activeLink}>Users</NavLink></li>
            </ul>

        </nav>
    )
}

export default Navbar;