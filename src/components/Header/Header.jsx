import React from 'react';
import style from './Header.module.css';

const Header = () => {
    return (
        <header className={style.header}>
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS9Ucd0xw8lbKSKL_fUhPdLA4Leco53f0EKIQ&usqp=CAU" alt="logo"></img>
        </header>
    )
}

export default Header