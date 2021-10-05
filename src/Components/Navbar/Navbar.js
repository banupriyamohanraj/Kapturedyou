
import "./Navbar.css"
import Kaptured from "../../Images/Kaptured.png"
import { Link } from 'react-scroll'

export default function Navbar() {
    return <>
    <div className="header ">
            <div className="header__left">
            <img src={Kaptured} alt="logo" height="50px" width="50px" ></img>&emsp;
            </div>
            <div className="header__right">
          
            <Link to="About" smooth={true} duration={500} activeClass="active" offset={-70}>
                <h6>ABOUT</h6> <span class="sr-only">(current)</span>
                </Link>&emsp;
              
                <Link to="fashion" smooth={true} duration={500} offset={-70}>
                    <h6> FASHION</h6>
                    </Link>&emsp;

                    <Link to="event" smooth={true} duration={500} offset={-70}>
                        <h6>EVENT</h6>
                        </Link>
              
            
            </div>
        </div>
        
       
    </>
}