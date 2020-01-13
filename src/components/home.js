import React,{Component} from 'react';
import '../css/home.css';
class Home extends Component  {
 state={
   id:"section1"
 }

animation(){
  setTimeout(()=>{
    this.state.id==="section1"?
    this.setState({id:"section2"}):this.setState({id:"section1"})
  },3000)
}


render(){
  {this.animation()}
  return (
  <section  id={this.state.id}>
    <div className="home">
<h3>Hello! you are welcome !!
</h3>
<h1>PROFESSIONAL ONLINE ACADEMY</h1>
<a  href='#'>
Learn More
</a>
  </div>
  </section>
  );
}

}

export default Home;
