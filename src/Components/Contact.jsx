import { Link } from "react-router-dom";
import img2 from "/src/assets/img2.png";
import { useState } from "react";

function Contact() {
  const [name, setName] = useState("");
  const [name2, setName2] = useState("");
  const [name3, setName3] = useState("");

  return (
    <>
      <div id="contact"></div>
      <div className="">
        {" "}
        <h1 className=" text-gray-400 text-[23px] font-semibold ">
          MAIL ME
        </h1>{" "}
        <hr />
        <br />
        <br />
        <div className="flex max-md:flex-col items-center justify-center">
          <img
            src={img2}
            alt=""
            className=" h-[300px] xl:h-[400px] w-[400px] "
          />
          <div>
            {/* /////////////// */}
            <div className=" flex-col items-center justify-center ">
              <div className="">
                <input
                  onChange={(e) => {
                    setName(e.target.value);
                  }}
                  value={name}
                  type="text"
                  required
                  className=" h-[50px] w-[300px] bg-[#ffffff3b] text-gray-200 border-blue-300 border-[1px] 
                rounded-md outline-none "
                  placeholder="Your Name"
                />
                <br />
                <br />
                <input
                  onChange={(e) => {
                    setName2(e.target.value);
                  }}
                  value={name2}
                  type="email"
                  className=" h-[50px] w-[300px] bg-[#ffffff3b] text-gray-200 border-blue-300 border-[1px] 
                rounded-lg  "
                  placeholder="Email"
                />
                <br />
                <br />
                <textarea
                  onChange={(e) => {
                    setName3(e.target.value);
                  }}
                  value={name3}
                  type="text"
                  required
                  className=" h-[200px] w-[300px] bg-[#ffffff3b] text-gray-200  border-blue-300 border-[1px]
                 rounded-lg outline-none "
                  placeholder="Your Message"
                ></textarea>
                <br />
                <br />
                <a href="mailto:echinecherem729@gmail.com">
                  {" "}
                  <button
                    className=" w-[200px] h-[50px] bg-slate-400 rounded-lg hover:bg-slate-600
                   transition-all "
                  >
                    Submit
                  </button>
                </a>
              </div>
            </div>
            <br />
            <br />
            <Link to="/projects">
              <div className="flex items-center ">
                {" "}
                <p className=" text-gray-400 hover:underline ">
                  Still contemplating ?{" "}
                </p>
                <i class="bx bx-right-top-arrow-circle text-[36px] text-gray-400 "></i>
              </div>
            </Link>
            {/* ////////////////////////////////// */}
          </div>
        </div>
      </div>{" "}
    </>
  );
}
export default Contact;
