import React from 'react';
import s from './Header.module.css';
import {NavLink} from "react-router-dom";
import {Button} from "../common/Button/Button";

const Header = (props) => {
    return <header className={s.header}>
        <img src='https://cdn-images-1.medium.com/max/2000/1*qXcjSfRj0C0ir2yMsYiRyw.jpeg' />

        <div className={s.loginBlock}>
            { props.isAuth
                ? <div>{props.login}  <Button act={props.logout} name="Log out"/> </div>
                : <NavLink to={'/login'}>Login</NavLink> }
        </div>
    </header>
}

export default Header;