import "./Home.css"
import { Link } from "react-router-dom";
import Fade from 'react-reveal/Fade';


export default function Home() {
    return <>

        <div className="Home__container m-0">
            <div className="row m-0">
                <div className=" col-6 Home__subTitle">
                    <div className="quote">
                     <Fade left> <p className="title1">SMILE FOR<br /> A <span style={{color:"orangered"}}>MOMENT</span>,<br /> LET ME <br /><span style={{color:"orangered"}}>KAPTURE</span> YOU </p>
                    
                        <p classname="title2" style={{color:"orangered"}}>Fashion | Event Photography </p><br />

<Link to="/portfolio"><button type="button" className="btn btn-ssecondary">PORTFOLIO</button></Link></Fade>

                    </div>
                </div>
            </div>


        </div>

        {/* C:\Users\sowmya\Desktop\kapturedyouportfolio\src */}

    </>
}