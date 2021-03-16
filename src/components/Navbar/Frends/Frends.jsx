import React from 'react';
import style from './Frends.module.css';

const Frends = (props) => {
    return (
        <div className={style.frend}>
            <div className={style.imgWrap}>
                <img src="" alt='ava frend'></img>
            </div>
            <div>{props.name}</div>

        </div>
    )
}


export default Frends;