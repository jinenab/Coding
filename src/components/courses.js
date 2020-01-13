import React,{Component} from 'react';
import '../css/courses.css';
import css from '../images/css.png';
import html from '../images/html.png';
import react from '../images/react.png';

class Courses extends Component  {
 state={
 }
render(){
  return (
<div className="courses">
<h2>Our Courses</h2>
<p>Lorem ipsum dolor sit amet, maecenas eget vestibulum justo.
</p>
<ul>
<li>
<div>
<img src={html}  alt="course"></img>
<p>Lorem ipsum dolor sit amet, maecenas eget vestibulum justo imperdiet, wisi risus purus augue vulputate.</p>
</div>
</li>



<li>
<div>
<img src={css}  alt="course"></img>
<p>Lorem ipsum dolor sit amet, maecenas eget vestibulum justo imperdiet, wisi risus purus augue vulputate.</p>
</div>
</li><li>
<div>
<img src={react}  alt="course"></img>
<p>Lorem ipsum dolor sit amet, maecenas eget vestibulum justo imperdiet, wisi risus purus augue vulputate.</p>
</div>
</li>

</ul>
</div>
  );
}

}

export default Courses;
