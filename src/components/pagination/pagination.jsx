import React from 'react';

import './pagination.css';

const Pagination = ({pages, currentPage, nextPage}) => {
    const pageLinks = [];

    for(let i = 1; i <= pages + 1; i++){
        let active = currentPage == i ? 'active' : '';

        pageLinks.push(<li className={`waves-effect ${active}`} key={i} 
        onClick={() => nextPage(i)}>
            <a href="#"></a>
            {i}
        </li>)
    }

    return(
        <div className="container">
            <div className="row">
                <ul className="pagination">
                     {pageLinks}
                </ul>
            </div>
        </div>
    )
}

export default Pagination;