// import reactLogo from './assets/react.svg'
import { Link } from 'react-router-dom'
import abc from '../assets/abc.svg'
const Navbar = () => {
  return (
    <>
    <div className='container'>
        <div className='container1'>
            <div className='abc'><img src={abc} alt="" /></div>
            <div className='def'><h2>Learning Exp.</h2></div>
        </div>
        <div className='container2'>

            <ul className='container3'>
                <li><Link to="#">Home</Link></li>
                <li><Link to="#">Services Us</Link></li>
                <li><Link to="#">Why Us</Link></li>
                <li><Link to="#">Our Goals</Link></li>
                <button>Contact Us</button>
            </ul>
        </div>
    </div>
    </>
  )
}

export default Navbar