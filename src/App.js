
import AboutPawafrique from "./component/AboutPawafrique";
import ContactUs from "./component/ContactUs";
import Footer from "./component/Footer";
import HeroSection from "./component/HeroSection";
import Nav from "./component/Nav";
import OurPortfolio from "./component/OurPortfolio";
import OurServices from "./component/OurServices";

function App() {
return(
<div className=" font-inter">
  <div className="backg">
<Nav/>
<HeroSection/>
</div>
<AboutPawafrique/>
<OurServices/>
<OurPortfolio/>
<ContactUs/>
<Footer/>
  </div>
  
  )
}

export default App;
