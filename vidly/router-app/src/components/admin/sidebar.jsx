import React from 'react';
import {Link} from 'react-router-dom';
const SideBar = () => {
    return ( <div>
        <ul>
        <li>
          <Link to="/admin/posts">posts</Link>
        </li>
        <li>
          <Link to="/admin/users">users</Link>
        </li>
      </ul> 
      </div>);
}
 
export default SideBar;