import React from 'react';
import style from './Preloader.module.css';

let Preloader = () => {
    return (
        <div className={style.spiner_wraper}>
            <svg className={style.spinner} viewBox="0 0 50 50">
                <circle className={style.path} cx="25" cy="25" r="20" fill="none" stroke-width="5"></circle>
            </svg>
        </div>
    )
}

export default Preloader;