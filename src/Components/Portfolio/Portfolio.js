import Kaptured from "../../Images/Kaptured.png"
import About from "../About/About";
import Myportfolio from "../Myportfolio/Myportfolio"
import { Link } from 'react-scroll'

export default function Portfolio() {
    return <>


        <div className="Portfolio__container">
            <nav class="navbar navbar-expand-lg navbar-light bg-light">
        <img src={Kaptured} alt="logo" height="100px" width="150px" ></img>&emsp;
                <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
                    <div class="navbar-nav">
                        <Link to="About" smooth={true} duration={500} activeClass="active" offset={-70}>ABOUT <span class="sr-only">(current)</span></Link>&emsp;
                        <Link to="Myportfolio" smooth={true} duration={500} offset={-70}> PORTFOLIO</Link>


                    </div>
                </div>
            </nav>
        </div>

        <div className="Portfolio__About" >
            <About />
            <Myportfolio />
        </div>





    </>
}