import { useState } from "react";
import { BrowserRouter } from "react-router-dom";
import {
  About,
  Contact,
  Experience,
  Feedbacks,
  Hero,
  Navbar,
  Tech,
  Works,
  StarsCanvas
} from "./components";
import Education from './components/Education';


const App = () => {
  const [language, setLanguage] = useState("en"); // shared state

  return (
    <BrowserRouter>
      <div className="relative z-0 bg-primary">
        <div className="bg-hero-pattern bg-cover bg-no-repeat bg-center">
          <Navbar language={language} setLanguage={setLanguage} />
          <Hero language={language} />
        </div>
        <About language={language} />
        <Education language={language} />
        <Experience language={language} />
        <Tech language={language} className="mt-[200px]" />

        <Works language={language} />
        <div className="relative z-0">
          <Contact language={language} />
          <StarsCanvas />
        </div>
      </div>
    </BrowserRouter>
  );
};
//glpat-UJglSyZyphN82nFRpGPXrm86MQp1Omh1b2RmCw.01.121urtcw5
export default App;
