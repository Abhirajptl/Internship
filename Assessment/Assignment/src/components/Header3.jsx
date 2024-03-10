import Dashboard from '../assets/Dashboard.svg'
import layout from '../assets/layout.svg'
import smartphone from '../assets/smartphone.svg'

const Header3 = () => {
  return (
    <div className='main3'>
        <div>
            <img src={Dashboard} alt="" />
            <h2>Learn Anything</h2>
            <p>It Is A Long Established Fact <br/> That A Reader Will Be <br/> Distracted By The Readable </p>
        </div>
        <div>
        <img src={layout} alt="" />
        <h2>Flexible Learning</h2>
        <p>It Is A Long Established Fact That A <br/> Reader Will Be Distracted By The <br/> Readable Content Of A Page When</p>
        </div>
        <div>
        <img src={smartphone} alt="" />
        <h2>Expert Connect</h2>
        <p>It Is A Long Established Fact <br/> That A Reader Will Be <br/> Distracted By The Readable</p>
        </div>
    </div>
  )
}

export default Header3