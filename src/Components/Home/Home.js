import "./Home.css"
import Kaptured from "../../Images/Kaptured.png"
import {Link} from "react-router-dom";
export default function Home(){
    return <>
    
    <div className="Home__container">
    <div className="Home__Title">
       <img src={Kaptured} alt="..." class="center"></img>
        </div> 
<div className="Home__subTitle">
    
<h3>Fashion | Event Photography</h3><br/>

<Link to="/portfolio"><button type="button" className="btn btn-dark">Enter</button></Link>
</div>

    </div>
    
    {/* C:\Users\sowmya\Desktop\kapturedyouportfolio\src */}
   
    </>
}