import React from 'react';
import style from './Profile.module.css';

const Profile = () => {
    return (
        <div className={style.content}>
            <div>
                <img src="https://proprikol.ru/wp-content/uploads/2019/10/krasivye-kartinki-okeana-2.jpg" alt="img"></img>
            </div>
            <div className={style.userWrap}>
                <div className={style.userPhoto}>
                    <img src="" alt="user photo"></img>
                </div>
                <div className={style.userInfo}>
                    <div>Sergey Rimsha</div>
                    <div>Date of Britch: <span>7.08.1994</span></div>
                    <div>Education: <span>БГПК</span></div>
                    <div>Web Site: <span>Vk.com</span></div>
                </div>
            </div>
            <div className={style.newPost}>
                <div>My Posts</div>
                <div>
                    <input type="text"/>
                </div>
                <div>
                    <button>Send</button>
                </div>
            </div>
            <div className={style.post}>
                <img src="" alt='post user photo'></img>
                <div className={style.postTxt}>Post_1</div>
            </div>
        </div>
    )
}

export default Profile;