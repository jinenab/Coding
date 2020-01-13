import React from 'react';
import '../css/navbar.css';
function Navbar() {
  return (
    <div className="navbar">
    <div className="navbar-header">
    <a href="#">Academy</a>
    </div>
    <div className="navbar-content">
    <div className="navbar-links">

<ul>
<li>
<a href="#">Home</a>
</li>
<li>
<a href="#">About</a>
</li><li>
<a href="#">Courses</a>
</li><li>
<a href="#">Blog</a>
</li><li>
<a href="#">Prices</a>
</li><li>
<a href="#">Testimonials</a>
</li>
</ul>
    </div>
</div>
    </div>
  );
}

export default Navbar;
