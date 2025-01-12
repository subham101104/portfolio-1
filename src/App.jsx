import "./App.css";
import { Achievements } from "./components/Achievements";
import { Introduction } from "./components/Introduction";
import { Members } from "./components/Members";
import { Navbar } from "./components/Navbar";
import 'bootstrap-icons/font/bootstrap-icons.css';

function App() {
  return (
    <>
      {/* Navbar */}
      <div className="w-[100%] h-[50px]">
        <Navbar />
      </div>
      {/* Introduction */}
      <div className="bg-black w-[100%] h-[100%] relative text-white font-customFont">
        <Introduction />
        <div className="absolute top-[80%] md:top-[85%] lg:top-[85%] inline-flex text-[10px] md:text-[20px] lg-text-[25px] h-[40px] w-[100%] justify-center items-center">
          <div className="flex text-center w-[280px] md:w-[530px] lg:w-[530px] pt-[6px]"><span>Welcome to your only stop for all the software needs!</span></div>
          <div className="text-white text-[18px] md:text-[30px] w-[50px] pl-[10px]"><i className="bi bi-arrow-down-short"></i></div>
        </div>
      </div>
      {/* Members Section */}
      <div className="bg-black w-full h-full relative">
      <div className="pl-[20px] md:px-[100px] absolute">
          <Members />
        </div>
      </div>
      {/* Achievements Section */}
      <div className="bg-black w-full h-full relative">
        <Achievements />
      </div>
    </>
  );
}

export default App;
