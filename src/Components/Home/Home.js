import "./Home.css"
import { Link } from "react-router-dom";


export default function Home() {
    return <>

        <div className="Home__container m-0">
            <div className="row m-0">
                <div className=" col-6 Home__subTitle">
                    <div className="quote">
                        <p className="title1">SMILE FOR<br /> A <span style={{color:"grey"}}>MOMENT</span>,<br /> LET ME <br /><span style={{color:"grey"}}>KAPTURE</span> YOU </p>
                    
                        <p classname="title2">Fashion | Event Photography</p><br />

<Link to="/portfolio"><button type="button" className="btn btn-secondary">PORTFOLIO</button></Link>

                    </div>
                </div>
            </div>


        </div>

        {/* C:\Users\sowmya\Desktop\kapturedyouportfolio\src */}

    </>
}