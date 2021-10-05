import "./About.css"
import { Element } from 'react-scroll'
import Kaptured from "../../Images/Kaptured.png"

export default function About() {
    return <>
        <Element name="About" className="About__container">
            <div className="About__title">
                <h2>ABOUT US</h2>

            </div>
            <div className="logo">
                <img src={Kaptured} alt="..."  ></img>
            </div>

            <div className="About__Description">


            <p>Bharath and Jagath running kapturedstudios from 2021, We live in chennai. Photography is our passion and we work to create
            very simplistic and cinematically inspired. We love what we do and adore the creative process, It is addictive and can give
            never ending possibilities. As a team, We will be keep on looking out for opportunities where we allow you to live and we will get you pictures
            that remains forever and ever as sweet memories.
            We will be thrilled to hear from you regarding photography project.</p>
            <div className="contact__container">

            Please connect with us in &ensp;
            <a href="https://instagram.com/kapturedstudio_?utm_medium=copy_link" target="_blank" rel="noreferrer"><img src="https://img.icons8.com/ios/40/000000/instagram-new--v1.png"alt="..."/></a>
            &ensp;
           
            <a href="https://www.facebook.com/kaptured.you" target="_blank" rel="noreferrer"><img src="https://img.icons8.com/ios-glyphs/40/000000/facebook-circled--v1.png" alt="..."/></a>
           
            </div>
            </div>

        </Element>
    </>
}