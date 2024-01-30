
import HeroSection from "./component/HeroSection";
import Nav from "./component/Nav";
import OurServices from "./component/OurServices";

function App() {
return(
<div className=" font-inter">
  <div className="backg">
<Nav/>
<HeroSection/>
</div>
<OurServices/>

  </div>
  
  )
}

export default App;
