import Testimonials from "./Testimonials";
import Languages from "./Languages";
import Contact from "./Contact";
import Animate from "./Animate";
import Timeline from "./Timeline";
import Landing from "./Landing";

function Services() {
  return (
    <>
      <Landing />
      <Animate />
      <div className=" p-[40px] sm:p-[40px] md:p-[60px] lg:p-[80px] xl:p-[170px] ">
        <div className="">
          <h1 className=" text-gray-400 text-[23px] font-semibold ">
            SERVICES
          </h1>{" "}
          <hr />
          <br />
          <br />
          <br />
          <div className=" max-md:flex-col lg:flex xl:flex  justify-evenly">
            <div className=" m-2 p-[60px] lg:p-[100px] xl:p-[150px] bg-[#2d2b2b] ">
              <h1 className=" text-xl font-semibold text-slate-400 ">
                Web Development
              </h1>
              <br />
              <p className=" text-blue-50 ">
                Building{" "}
                <span className=" text-blue-400 font-semibold ">
                  stunning ,interactible and responsive
                </span>{" "}
                websites to meet users needs
              </p>
            </div>
            {/* //////////////////////////////////////////// */}
            <div className=" m-2 p-[60px] lg:p-[100px] xl:p-[150px] bg-[#2d2b2b] ">
              <h1 className=" text-xl font-semibold text-slate-400 ">
                Software Development
              </h1>
              <br />
              <p className=" text-blue-50 ">
                Building{" "}
                <span className=" text-blue-400 font-semibold">
                  compatible user friendly
                </span>{" "}
                webapps and mobile apps
              </p>
            </div>
          </div>
        </div>
        <div className=" max-md:flex-col lg:flex xl:flex  justify-evenly">
          <div className=" m-2 p-[60px] lg:p-[100px] xl:p-[150px] bg-[#2d2b2b] ">
            <h1 className=" text-xl font-semibold text-slate-400 ">
              Leadership Skills
            </h1>
            <br />
            <p className=" text-blue-50 ">
              I have leadership skills to{" "}
              <span className=" text-blue-400 font-semibold">
                co-ordinate, organize and lead
              </span>{" "}
              a team
            </p>
          </div>
          {/* //////////////////////////////////////////// */}
          <div className=" m-2 p-[60px] lg:p-[100px] xl:p-[150px] bg-[#2d2b2b] ">
            <h1 className=" text-xl font-semibold text-slate-400 ">
              Up-to Date
            </h1>
            <br />
            <p className=" text-blue-50 ">
              {" "}
              I Always use{" "}
              <span className=" text-blue-400 font-semibold">
                trending, latest and user compatible{" "}
              </span>
              technologies to meet users needs
            </p>
          </div>
        </div>
        <br />
        <br />
        <br />
        <Timeline />
        <Languages />
        <Testimonials />
        <Contact />
      </div>
    </>
  );
}
export default Services;
