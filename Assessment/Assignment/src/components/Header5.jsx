import { Link } from 'react-router-dom'
import video1 from '../assets/video1.mp4'

const Header5 = () => {
  return <>
  <div className="cont">
  <div className="cont2">
  <video controls width="400px">
        <source src={video1} type="video/mp4"  />
        
      </video>
    </div>
    <div className="cont1 cont11">
      <div className="cont1a">
        <h1>
        Crafting Your Dream Career: <br/> Building a Path You Love with us
        </h1>
        <p>
        At Learning Exp. We Are Committed To Providing You With A Superior <br/> Learning Experience That Empowers You To Achieve Your Goals. Join Us <br/> Today And Embark On A Journey Of Discovery, Growth, And Success.
        </p>
        <p>Our Platform Is Designed To Empower Learners Like You To Excel In Today’s <br/> Dynamic World.</p>
      </div>
      <div className="cont1b">
        <Link to="#">
          <button>Get More</button>
        </Link>
      </div>
    </div>
    
  </div>
</>
}

export default Header5