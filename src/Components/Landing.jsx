import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
// import Animate2 from "./Animate2";

function Landing() {
  return (
    <>
      <div className="h-[100vh]">
        <div className=" p-[44px] sm:p-[40px] md:p-[60px] lg:p-[80px] xl:p-[170px] ">
          <p className=" text-gray-400 text-[23px] font-semibold ">
            I'm Emmanuel Chinecherem
          </p>
          <h1
            className="text-[46px] flex-col items-center 
          justify-center text-blue-50 font-bold "
          >
            <span
              className=" text-slate-400 text-[35px] 
            sm:text-[30px] md:text-[35px] lg:text-[40px] xl:text-[45px] "
            >
              WEB DEVELOPER <br />
              +SOFTWARE ENGINEER
            </span>
          </h1>
          <div className=" bg-blue-300 w-[210px] p-[1px] "></div>
          <p className=" text-slate-500 ">
            I build efficient, responsive and pixel-perfect digital experiences{" "}
            for web and mobile applications.
          </p>
          <div className="flex">
            <a href="https://wa.me/message/ZW7TEOJJSIXLG1">
              {" "}
              <i class="bx bxl-whatsapp text-[30px] m-[10px] text-center hover:text-blue-500 transition-all text-blue-200"></i>
            </a>{" "}
            <a href="https://www.linkedin.com/in/emmanuel-chinecherem-767739284/">
              {" "}
              <i class="bx bxl-linkedin text-[30px] m-[10px] text-center hover:text-blue-500 transition-all text-blue-200"></i>
            </a>
            <a href="https://github.com/emmanuel-nwafor">
              <i class="bx bxl-github text-[30px] m-[10px] text-center hover:text-blue-500 transition-all text-blue-200"></i>
            </a>{" "}
            <a href="https://stackoverflow.com/">
              {" "}
              <i class="bx bxl-stack-overflow text-[30px] m-[10px] text-center hover:text-blue-500 transition-all text-blue-200"></i>
            </a>{" "}
          </div>
          <br />
          <div className="">
            <Link to="/about">
              <button className=" hover:bg-blue-300 hover:text-gray-700 transition-all text-gray-200 w-[176px] bg-slate-500 p-[12px] rounded-full ">
                {" "}
                More about me{" "}
                <span className=" bg-white p-1 rounded-full ">
                  {" "}
                  <i class="bx bx-right-arrow-alt text-black"></i>
                </span>
                {/* AN ARROW RIGHT ICON GOES IN HERE */}
              </button>
            </Link>
          </div>{" "}
        </div>
      </div>{" "}
      {/* <Animate2 /> */}
    </>
  );
}
export default Landing;
