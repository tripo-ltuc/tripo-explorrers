import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../UI/AboutUs.css';
// import { Row,Col,Container,Card,CardBody } from 'react-bootstrap';
// import { ListGroupItem, ListGroup } from 'react-bootstrap';
import MohPic from '../../images/ProfileIMG.png';
import RahafPic from '../../images/profilepic.png';
import TariqPic from '../../images/tariq.jpg';
import ghadeer from '../../images/ghadeer.png';
import mohpic from '../../images/mohpic.jpg';
import '../UI/AboutUs.css'

class AboutUs extends React.Component {
  render() {
    return (
<section className="about-us">
          <br />
          <br />
          <div class="containerx">
  <div class="row">
    <div class="col-12 col-sm-6 col-md-4 col-lg-3">
      <div class="our-team">
        <div class="picture">
          <img class="img-fluid" src={MohPic} alt="..."/>
        </div>
        <div class="team-content">
          <h3 class="name">Mohammad Al-Zoubi</h3>
          <h4 class="title">Web Developer</h4>
          <p>Computer Sciences graduate from Yarmouk University and software developer trainee at ASAC</p>
        </div>
        <ul class="social">
          <li><a href="#" class="fa fa-facebook" aria-hidden="true"></a></li>
          <li><a href="#" class="fa fa-twitter" aria-hidden="true"></a></li>
          <li><a href="#" class="fa fa-github" aria-hidden="true"></a></li>
          <li><a href="#" class="fa fa-linkedin" aria-hidden="true"></a></li>
        </ul>
      </div>
    </div>
        <div class="col-12 col-sm-6 col-md-4 col-lg-3">
      <div class="our-team">
        <div class="picture">
        <img class="img-fluid" src={RahafPic}/>
        </div>
        <div class="team-content">
          <h3 class="name">Rahaf Al-Jazzazi</h3>
          <h4 class="title">Electraical Engineer</h4>
          <p>Holding a bachelor degree in Electrical and Communication engineering from German Jordanian University</p>
        </div>
        <ul class="social">
        <li><a href="https://web.facebook.com/rahaf.aljazzazi" class="fa fa-facebook" aria-hidden="true"></a></li>
          <li><a href="#" class="fa fa-twitter" aria-hidden="true"></a></li>
          <li><a href="https://github.com/RahafJ96" class="fa fa-github" aria-hidden="true"></a></li>
          <li><a href="https://www.linkedin.com/in/rahaf-al-jazzazi-28635111a/" class="fa fa-linkedin" aria-hidden="true"></a></li>
        </ul>
      </div>
    </div>
        <div class="col-12 col-sm-6 col-md-4 col-lg-3">
      <div class="our-team">
        <div class="picture">
        <img class="img-fluid" src={TariqPic}/>
        </div>
        <div class="team-content">
          <h3 class="name">Tariq Zeadeh</h3>
          <h4 class="title">Network Engineer</h4>
          <p>Graduated from Jerash University, with a bachelor degree in Network Engineering</p>
          <br/>
        </div>
        <ul class="social">
        <li><a href="https://web.facebook.com/?_rdc=1&_rdr" class="fa fa-facebook" aria-hidden="true"></a></li>
          <li><a href="#" class="fa fa-twitter" aria-hidden="true"></a></li>
          <li><a href="https://github.com/TareqZeadeh" class="fa fa-github" aria-hidden="true"></a></li>
          <li><a href="https://www.linkedin.com/in/tareqhasan173/" class="fa fa-linkedin" aria-hidden="true"></a></li>
        </ul>
      </div>
    </div>
    </div>
    <div className="test">
    <div class="row">
        <div class="col-12 col-sm-6 col-md-2 col-lg-3 x">
      <div class="our-team">
        <div class="picture">
        <img class="img-fluid" src={ghadeer}/>
        </div>
        <div class="team-content">
          <h3 class="name">Ghadeer Khasawneh</h3>
          <h4 class="title">Aeronautical</h4>
          <br/>
          <br/>
          <p>Holds  Bachelor's degree in Aeronautical Engineering from Jordan University of Science and Technology</p>
        </div>
        <ul class="social">
        <li><a  class="fa fa-facebook"  aria-hidden="true"></a></li>
          <li><a class="fa fa-twitter"  aria-hidden="true"></a></li>
          <li><a class="fa fa-github"  aria-hidden="true"></a></li>
          <li><a class="fa fa-linkedin" aria-hidden="true"></a></li>
        </ul>
      </div>
    </div>
    <div class="col-12 col-sm-6 col-md-2 col-lg-3 y">
      <div class="our-team">
        <div class="picture">
        <img class="img-fluid" src={mohpic}/>
        </div>
        <div class="team-content">
          <h3 class="name">Mohammad Kabbara</h3>
          <h4 class="title">Electrical and Electronic Engineer</h4>
          <p>I graduated with a major in Electrical and Electronic Engineering, I joined to this course because my passion for technology and learn more about coding
</p>
        </div>
        <ul class="social">
        <li><a href="#" class="fa fa-facebook" aria-hidden="true"></a></li>
          <li><a href="#" class="fa fa-twitter" aria-hidden="true"></a></li>
          <li><a href="#" class="fa fa-github" aria-hidden="true"></a></li>
          <li><a href="#" class="fa fa-linkedin" aria-hidden="true"></a></li>
        </ul>
      </div>
    </div>
  </div>
  </div>
</div>
          </section>
    );


  }
}

export default AboutUs;