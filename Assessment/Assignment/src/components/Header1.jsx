import { Link } from "react-router-dom";
import video1 from '../assets/video1.mp4'

const Header1 = () => {
  return (
    <>
      <div className="cont">
        <div className="cont1">
          <div className="cont1a">
            <h1>
              We Create Learning Experience <br /> With Excellent Technology
            </h1>
            <p>
              Unlimited Access To 100+ World-Class Courses, Hands-On <br />{" "}
              Projects, And Job-Ready Certificate Programs— <br /> All Included
              In Your Subscription
            </p>
          </div>
          <div className="cont1b">
            <Link to="#">
              <button>Book Demo Class</button>
            </Link>
            <Link to="#" className="shadow2">
              <span>Explore More <i className="fa-solid fa-arrow-right"></i></span> 
            </Link>
            
          </div>
        </div>
        <div className="cont2">
        <video controls width="400px">
        <source src={video1} type="video/mp4"  />
        
      </video>

        </div>
      </div>
    </>
  );
};

export default Header1;
