import { SocialIcon } from 'react-social-icons';
import React,{Component} from 'react';
import '../css/footer.css';
class Footer extends Component  {
 state={
 }
render(){
  return (
<div className="footer">
<div id="footer-sections">
  <div id="footer-section1">
    <h2>About academy</h2>
  <p>Nunc id turpis tincidunt dui volutpat hendrerit et efficitur dolor. Morbi quis tempor felis, ut dictum ipsum. Praesent venenatis rutrum interdum.</p>
  </div>
  <div id="footer-section2">
    <h2>Sessions</h2>
  <h4>    Morning
</h4>
<h5>    6:00 AM - 11:00 PM
</h5>
<h4>    Evening
</h4>
    <h5>    4:00 PM - 9:00 PM
</h5>

  </div>
 <div id="footer-section3">
   <h2>Follow us</h2>
 <div id="links">
 <SocialIcon url="https://www.facebook.com"></SocialIcon>
<SocialIcon url="https://www.linkedin.com"></SocialIcon>
 <SocialIcon url="https://www.instagram.com"></SocialIcon>
 <SocialIcon url="https://www.gmail.com"></SocialIcon>
</div>
 </div>

</div>
<div  id="footer-end">

  <p>Copyright © 2016 Jinen| Design: Jinen</p>
</div>
</div>
  );
}

}

export default Footer;
