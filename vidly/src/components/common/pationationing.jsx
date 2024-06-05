import React from 'react';
import _ from 'lodash';
const Pagination= props => {
    const {itemCount,pageSize,onPageChange,currentPage}= props;
    const pageCount = Math.ceil(9/pageSize);
    if (pageCount===1) return null;
    const pages = _.range(1,pageCount+1);
    return <nav>
        <ul className="pagination">
            {pages.map( page => (
                <li key = {page} className={page===currentPage?"page-item active":"page-item"}>
                    <a onClick = {()=>onPageChange(page)}
                    className="page-link">
                        {page}
                         </a>
                        </li>
            ))}
          
        </ul>
    </nav>;
}
 
export default Pagination;