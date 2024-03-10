import ttt from '../assets/ttt.png'
const Header9 = () => {
  return (
    <div className='main9'>
        <div className='main9a'>
            <img src={ttt} alt="" />
        </div>
        <div className='main9b'>
            <span><i className="fa-solid fa-star"></i><i className="fa-solid fa-star"></i><i className="fa-solid fa-star"></i><i className="fa-solid fa-star"></i><i className="fa-solid fa-star"></i></span>
            <p>"Sed Ut Perspiciatis Unde Omnis Iste Natus Error Sit <br/> Voluptatem Accusantium Doloremque <br/>Laudantium,<br/> Totam Rem Aperiam, Eaque Ipsa Quae Ab Illo <br/> Modi Tem."</p>
            <p style={{fontWeight:"800"}}>Raid Islam</p>
            <p>Product Manager. <a href="#">@Learning.com</a></p>
        </div>
    </div>
  )
}

export default Header9