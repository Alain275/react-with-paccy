import React from 'react';

import{Link,NavLink} from "react-router-dom"

const Navbar = () => {
    return ( 
        <nav class="navbar navbar-expand-lg navbar-light bg-light ">
  <Link  class="navbar-brand" to="">Vidly</Link>
  
    <div class="navbar-nav">
    <NavLink  class="nav-item nav-link" to="movies">movies</NavLink>
      <NavLink  class="nav-item nav-link " to="customers">customers <span class="sr-only">(current)</span></NavLink>
      <NavLink  class="nav-item nav-link" to="rental">rentals</NavLink>
      
      
    
  </div>
</nav>
     );
}
 
export default Navbar;