import React from 'react';

import './pagination.css';

const Pagination = ({pages, currentPage, nextPage}) => {
    const pageLinks = [];

    for(let i = 1; i <= pages + 1; i++){
        let active = currentPage == i ? 'active' : '';

        pageLinks.push(<li className={`waves-effect waves-light ${active}`} key={i} 
        onClick={() => nextPage(i)}>
            <a href="#">
            {i}
            </a>
        </li>)
    }

    return(
        <div className="container">
            <div className="row">
                <ul className="pagination">
                    {currentPage > 1 ? <li className={`waves-effect`}
                     onClick={() => nextPage(currentPage - 1)}><a href="#">Prev</a></li> : ''}
                    {pageLinks}
                    {currentPage < pages + 1 ? <li className={`waves-effect`}
                    onClick={() => nextPage(currentPage + 1)}><a href="#">Next</a></li> : ''}
                </ul>
            </div>
        </div>
    )
}

export default Pagination;