import "./App.css";

import Brandlogo from "./component/Brandlogo";
import Headlogo from "./component/Headlogo";
import InfoPage from "./component/InfoPage";
import Footer from "./component/Footer";

function App() {
  return (
    <div className="bg-[url('./images/bg.jpeg')]  h-[100%] w-[100%]  relative">
      <Brandlogo />
      <Headlogo />
      <InfoPage />
      <Footer />
    </div>
  );
}

export default App;
