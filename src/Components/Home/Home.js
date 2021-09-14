import "./Home.css"
import { Link } from "react-router-dom";


export default function Home() {
    return <>

        <div className="Home__container m-0">
            <div className="row m-0">
                <div className=" col-6 Home__subTitle">
                    <div className="quote">
                        <h1>SMILE FOR<br /> A <span style={{color:"grey"}}>MOMENT</span>,<br /> LET ME <br /><span style={{color:"grey"}}>KAPTURE</span> YOU </h1>
                    
                        <h5>Fashion | Event Photography</h5><br />

<Link to="/portfolio"><button type="button" className="btn btn-secondary" style={{backgroundColor:"grey",fontWeight:"600",padding:"10px"}}>PORTFOLIO</button></Link>

                    </div>
                </div>
            </div>


        </div>

        {/* C:\Users\sowmya\Desktop\kapturedyouportfolio\src */}

    </>
}