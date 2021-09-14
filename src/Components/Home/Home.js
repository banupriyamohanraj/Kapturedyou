import "./Home.css"
import { Link } from "react-router-dom";


export default function Home() {
    return <>

        <div className="Home__container ">
            <div className="row ">
                <div className=" col-6 Home__subTitle">
                    <div className="quote">
                        <h1>SMILE FOR<br /> A <span style={{color:"darkorange"}}>MOMENT</span>,<br /> LET ME <br /><span style={{color:"darkorange"}}>KAPTURE</span> YOU </h1>
                    
                        <h5>Fashion | Event Photography</h5><br />

<Link to="/portfolio"><button type="button" className="btn btn-warning" style={{backgroundColor:"darkorange",fontWeight:"600"}}>PORTFOLIO</button></Link>

                    </div>
                </div>
            </div>


        </div>

        {/* C:\Users\sowmya\Desktop\kapturedyouportfolio\src */}

    </>
}