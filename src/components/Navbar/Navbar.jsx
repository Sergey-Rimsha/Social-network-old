import React from 'react';
import style from './Navbar.module.css';
import {NavLink} from "react-router-dom";
import Frends from './Frends/Frends';


const Navbar = () => {
    return (
        <nav className={style.sidebar}>
            <NavLink to = "/profile" activeClassName={style.active}>
                <div>
                    Profile
                </div>
            </NavLink>

            <NavLink to = "/dialogs" activeClassName={style.active}>
                <div>
                    Messages
                </div>
            </NavLink>
            <NavLink to = "/users" activeClassName={style.active}>
                <div>
                    Users
                </div>
            </NavLink>
            <NavLink to = "/news" activeClassName={style.active}>
                <div>
                    News
                </div>
            </NavLink>
            <NavLink to = "/music" activeClassName={style.active}>
                <div>
                    Music
                </div>
            </NavLink>
            <NavLink to = "/settings" activeClassName={style.active}>
                <div>
                    Settings
                </div>
            </NavLink>
            <div className={style.wrap}>
                <div>Frends</div>
                <h3 className={style.frendsWrap}>
                    <Frends name = {'Sergey'} />
                    <Frends name = {'Vasay'} />
                    <Frends name = {'Tafik'} />
                </h3>
            </div>
        </nav>
    )
}

export default Navbar;