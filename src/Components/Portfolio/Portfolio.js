
import About from "../About/About";
import Myportfolio from "../Myportfolio/Myportfolio"
import Footer from "../Footer/Footer";
import Navbar from "../Navbar/Navbar";

import SimpleReactLightbox from 'simple-react-lightbox';

export default function Portfolio() {
    return <>


        

       <Navbar/>
            <About />
            <SimpleReactLightbox>
            <Myportfolio />
            </SimpleReactLightbox>
            
       <Footer/>





    </>
}