import logo from "/src/assets/logo.png";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <>
      <div className="bg-slate-600 text-white">
        <div className="flex justify-evenly m-[40px] max-md:flex-col">
          <div className=" flex-col items-center justify-center ">
            <img src={logo} alt="" className=" h-[150px] max-md:h-[100px] " />
          </div>
          <div className=" flex-col items-center justify-center  m-[30px]">
            <p className="">Details</p>
            <Link to="/about">
              {" "}
              <p className="font-semibold hover:underline">About</p>
            </Link>
            <a href="#backtoTop">
              <p className="font-semibold hover:underline">Services</p>
            </a>
          </div>
          <div className=" flex-col items-center justify-center m-[30px] ">
            <p className="">Resources</p>
            <p className="font-semibold hover:underline">Testimonials</p>
            <a href="#hobbies">
              {" "}
              <p className="font-semibold hover:underline">Hobbies</p>
            </a>{" "}
          </div>
          <div className="   m-[30px]">
            <p className="">Quick links</p>
            <p className="font-semibold hover:underline">
              <a href="https://wa.me/message/ZW7TEOJJSIXLG1">
                {" "}
                <i class="bx bxl-whatsapp text-[25px] m-1 text-center hover:text-white transition-all text-blue-200"></i>
              </a>{" "}
              <a href="https://www.linkedin.com/in/emmanuel-chinecherem-767739284/">
                {" "}
                <i class="bx bxl-linkedin text-[25px] m-1 text-center hover:text-white transition-all text-blue-200"></i>
              </a>
              <a href="https://github.com/emmanuel-nwafor">
                <i class="bx bxl-github text-[25px] m-1 text-center hover:text-white transition-all text-blue-200"></i>
              </a>{" "}
              <a href="https://stackoverflow.com/">
                {" "}
                <i class="bx bxl-stack-overflow text-[25px] m-1 text-center hover:text-white transition-all text-blue-200"></i>
              </a>
            </p>
          </div>
          <div className=" flex-col items-center justify-center  m-[30px]">
            <p className="">Contact</p>
            <div className="flex">
              <a href="https://www.facebook.com/profile.php?id=10083700348708">
                <i className="bx bxl-facebook text-[25px] text-blue-200 hover:text-white"></i>
              </a>
              <a href="https://www.instagram.com/onyekachi1044?igsh=YzljYTk1ODg3Zg==">
                <i className="bx bxl-instagram text-[25px] text-blue-200 hover:text-white"></i>
              </a>
            </div>
          </div>
        </div>
        <div className="">
          <span className="flex items-center justify-center">
            {" "}
            <p className="pl-[160px] max-md:pl-0 max-md:text-center">
              {" "}
              &copy; Copyright 2024 Emma-Dev.com
            </p>
          </span>
        </div>

        {/* <h1 className="xl:text-[200px] sm:text-[100px] md:text-[140px] max-md:text-[50px]  opacity-[0.5] font-bold bg-clip-text text-transparent text-center bg-gradient-to-r from-gray-400 via-white-500 to-white">
          P <span>r</span>
          <span>i</span>
          <span>m</span>
          <span>e </span>
          <span>X</span>
        </h1> */}
      </div>
    </>
  );
}
export default Footer;
