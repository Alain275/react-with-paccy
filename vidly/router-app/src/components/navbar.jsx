import React from "react";

const NavBar = () => {
  return (
    <ul>
      <li>
        <link to="/">Home</link>
      </li>
      <li>
        <link to="/products">Products</link>
      </li>
      <li>
        <link to="/posts/2018/06">Posts</link>
      </li>
      <li>
        <link to="/admin">Admin</link>
      </li>
    </ul>
  );
};

export default NavBar;
