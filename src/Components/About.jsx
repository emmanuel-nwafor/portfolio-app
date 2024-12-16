import Hobbies from "./Hobbies";
import img3 from "/src/assets/image3.jpg";
import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

import { motion } from "framer-motion";

const pageVariants = {
  initial: { opacity: 0, x: "-100vw" },
  animate: { opacity: 1, x: 0 },
  exit: { opacity: 0, x: "100vw" },
};

const pageTransition = { type: "spring", stiffness: 50, damping: 20 };

function About() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      easing: "ease-in-out",
      once: true,
    });
  }, []);

  return (
    <>
      <motion.div
        initial="initial"
        animate="animate"
        exit="exit"
        variants={pageVariants}
        transition={pageTransition}
      >
        <div className=" p-[47px] sm:p-[40px] md:p-[60px] lg:p-[90px] xl:p-[100px] ">
          <div
            className="flex justify-evenly max-md:flex-col
          "
          >
            <div className="flex-col">
              <h1 className=" text-gray-400 p-[15px] font-semibold text-[22px] ">
                About Me
              </h1>
              <hr className="  " />
              <br /> <br />
              <p className="text-blue-300 p-[10px] ">
                Hello! My name is <b>Emmanuel Nwafor Chinecherem</b>, and I am a
                passionate and detail-oriented Frontend Developer and App
                Developer, dedicated to crafting engaging and user-friendly web
                and mobile applications. With a strong foundation in modern
                technologies and a commitment to continuous learning, I strive
                to create seamless digital experiences that leave a lasting
                impression.
              </p>
              <br />
              <h1 className=" text-gray-400 p-[15px] font-semibold text-[22px] ">
                My Skill set
              </h1>
              <hr className="  " />
              <br /> <br />
              <p className="text-blue-300 p-[10px] ">
                I specialize in frontend development, leveraging the power of
                modern tools and frameworks to build responsive and dynamic
                interfaces. My technical stack includes: Core Technologies:
                HTML, CSS, JavaScript Styling Frameworks: Tailwind CSS Libraries
                & Frameworks: React.js, jQuery Backend Support: Node.js (for API
                integration and dynamic content rendering) Version Control: Git
                & GitHub (ensuring efficient collaboration and project
                management)
              </p>
              <br />
              <br />
              <button
                className=" flex items-center p-[10px] text-blue-300 hover:text-white hover:bg-slate-600 transition-all pl-5 
               pr-5 rounded-lg pb-2 pt-2 bg-slate-700"
              >
                Download Resume
                <i class="bx bx-down-arrow-alt text-white text-[30px] m-[10px] "></i>
              </button>{" "}
            </div>
            <img
              src={img3}
              alt=""
              className=" m-[20px] h-[350px] sm:h-[500px] sm:w-[350px] md:h-[300px] md:w-[250px] lg:h-[360px] lg:w-[260px]
             xl:h-[400px] xl:w-[300px] rounded-xl "
            />

            <div>
              {/* ///////////////// */}
              <div id="backtoTop"></div>
              {/* ///////////////// */}
              <h1 className=" text-gray-400 p-[15px] font-semibold text-[22px] ">
                What i offer
              </h1>
              <hr className="  " />
              <br /> <br />
              <p className=" text-blue-300 p-[10px] ">
                <b>Responsive Design Expertise:</b> Ensuring that every project
                performs flawlessly on all screen sizes and devices.
                <br />
                <br />
                <b>Collaborative Development:</b> Working seamlessly with teams,
                utilizing version control tools like Git and GitHub for
                efficient project tracking and collaboration.
                <br />
                <br />
                <b> Problem-Solving Mindset:</b> Adapting to challenges with
                innovative solutions and staying updated with the latest
                industry trends.
              </p>
              <h1 className=" text-gray-400 p-[15px] font-semibold text-[22px] ">
                Why I Love What I Do
              </h1>
              <hr className="  " />
              <p className=" text-blue-300 p-[10px] ">
                Web development is more than a profession for me it's a creative
                outlet. I enjoy the process of transforming ideas into reality
                and seeing my work make an impact on users' lives. Feel free to
                explore my portfolio to see some of the projects I’ve worked on,
                or connect with me to discuss how we can bring your ideas to
                life!
              </p>
            </div>
          </div>

          {/* //////////////////////////////////////////////////////////////////// */}

          <div className="  ">
            <h1 className=" text-gray-400 p-[15px] font-semibold text-[22px] ">
              Hobbies
            </h1>
            <hr />
            <br />
            <div data-aos="fade-right" data-aos-duration="1000">
              {" "}
              <Hobbies />
            </div>
          </div>
        </div>
      </motion.div>
    </>
  );
}
export default About;
