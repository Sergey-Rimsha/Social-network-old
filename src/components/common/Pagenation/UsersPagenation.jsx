import React from 'react';
import style from './UsersPagenation.module.css';

const UsersPagenation = ({totalUsersCount, pageSize, currentPage, onPageChanged}) => {

    let pagesCount = Math.ceil(totalUsersCount / pageSize);
    let pages = [];

    for (let i = 1; i <= pagesCount ; i++) {
        pages.push(i);
    }

    const onPage = (currentPage) => {
        if (currentPage < 1) {
            currentPage = pages.length;
        } else if (currentPage > pages.length) {
            currentPage = 1
        }
        onPageChanged(currentPage)
    }

    
    const PageNavigation = (p) => {
        if (p < currentPage + 3 && p > currentPage - 3) {
            return (
                <span className={currentPage === p && style.selectedPage} 
                onClick={(e) => {onPageChanged(p)}}>{p}</span>
            )
        }
    }

    return (
        <div>
            <span>
                <button onClick={(e) => {onPage(--currentPage)}}>prev</button>
            </span>
            { pages.map( p => { return PageNavigation(p) }) }
            <span>
                <button onClick={(e) => {onPage(++currentPage)}} >next</button>
            </span>
        </div>
    )
}

export default UsersPagenation;