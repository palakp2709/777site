import "./App.css";

import Brandlogo from "./component/Brandlogo";
import Headlogo from "./component/Headlogo";
import InfoPage from "./component/InfoPage";
import Footer from "./component/Footer";
// import Bg from "./component/Bg";

function App() {
  return (
    <div className="bg-gradient-to-r bg-blue-950 from-cyan-700 h-[100%]  relative">
      {/* <div className="absolute   h-[100%] w-full ">
        <Bg />
      </div> */}

      {/* <div className="relative "> */}
          {/* <div > */}
            <Brandlogo />
          {/* </div> */}

          {/* <div className="absolute right-1 sm:right-4 top-36 sm:top-32 lg:top-10 lg:right-24 "> */}
            <Headlogo />
          {/* </div> */}
      {/* </div> */}
      
      <InfoPage />
      <Footer />
    </div>
  );
}

export default App;
