import img4 from "/src/assets/img4.jpg";
import img from "/src/assets/image.png";
import img3 from "/src/assets/image copy.png";
import img5 from "/src/assets/image7.png";

function Projects() {
  return (
    <>
      <div id="projects"></div>
      <div className=" p-[30px] sm:p-[40px] md:p-[60px] lg:p-[80px] xl:p-[170px] ">
        <div className="">
          <h1 className=" text-gray-400 text-[23px] font-semibold ">
            SOME PROJECTS
          </h1>{" "}
          <hr />
          <br />
          <div className=" max-md:flex-col sm:flex-col md:flex-col lg:flex xl:flex flex ">
            <div className=" max-md:flex-col bg-gray-700 p-[39px] m-1 rounded-lg flex justify-evenly ">
              <img
                src={img4}
                alt=""
                className=" h-[300px] w-[500px] rounded-md "
              />
              <span className="flex-col m-3 ">
                <h1 className=" text-[25px] text-slate-400 font-bold ">
                  Movie Search Engine
                </h1>
                <div>
                  <h2 className="text-gray-300 text-[17px] font-semibold ">
                    Languages: HTML, CSS, JAVASCRIPT
                  </h2>
                  <br />
                  <p className="text-slate-400">
                    A website where users can search for movies . The purpose of
                    the website is to enable users find movies with ease without
                    having to go through the hassles of searching the internet
                    over and over again.
                  </p>
                  <br />
                  <h2 className="text-gray-300 text-[17px] font-semibold ">
                    API Integration
                  </h2>
                </div>
                <br />
                <a
                  href="https://emmanuel-nwafor.github.io/Moviehub/"
                  className=" text-gray-400 "
                >
                  Visit site
                </a>
              </span>
            </div>
            {/* ///////////////////////////////////// */}
            <div className=" max-md:flex-col bg-gray-700 p-[39px] m-1 rounded-lg flex justify-evenly ">
              <img
                src={img}
                alt=""
                className=" h-[260px] w-[400px] rounded-md "
              />
              <span className="flex-col m-3 ">
                <h1 className=" text-[25px] text-slate-400 font-bold ">
                  Real Estate Web App
                </h1>
                <div>
                  <h2 className="text-gray-300 text-[17px] font-semibold ">
                    Languages: REACT, JAVASCRIPT, TAILWIND CSS
                  </h2>
                  <br />
                  <p className="text-slate-400">
                    A web application that helps users find houses closest and
                    far from them.
                  </p>
                  <br />
                  <h2 className="text-gray-300 text-[17px] font-semibold ">
                    API Integration,
                  </h2>
                </div>
                <br />
                <a
                  href="https://emmanuel-nwafor.github.io/"
                  className=" text-gray-400 "
                >
                  Visit site
                </a>
              </span>
            </div>
            {/* ////////////////////////////////////////////// */}
            <div className=" max-md:flex-col bg-gray-700 p-[39px] m-1 rounded-lg flex justify-evenly ">
              <img
                src={img5}
                alt=""
                className="  h-[260px] w-[400px] rounded-md "
              />
              <span className="flex-col m-3 ">
                <h1 className=" text-[25px] text-slate-400 font-bold ">
                  Portfolio Web App
                </h1>
                <div>
                  <h2 className="text-gray-300 text-[17px] font-semibold ">
                    Languages: REACT, JAVASCRIPT, TAILWIND CSS
                  </h2>
                  <br />
                  <p className="text-slate-400">
                    This is my portfolio web application . Just thought i should add it , because its part
                    of my projects.
                  </p>
                </div>
                <br />
                <a
                  href="https://emma.com"
                  className=" text-gray-400 "
                >
                  Visit site
                </a>
              </span>
            </div>
            <div className=" max-md:flex-col bg-gray-700 p-[39px] m-1 rounded-lg flex justify-evenly ">
              <img
                src={img3}
                alt=""
                className="  h-[260px] w-[400px] rounded-md "
              />
              <span className="flex-col m-3 ">
                <h1 className=" text-[25px] text-slate-400 font-bold ">
                  E-commerce Website
                </h1>
                <div>
                  <h2 className="text-gray-300 text-[17px] font-semibold ">
                    Languages: HTML, JAVASCRIPT, TAILWIND CSS, CSS
                  </h2>
                  <br />
                  <p className="text-slate-400">
                    A website where users can purchase products and goods online
                  </p>
                </div>
                <br />
                <a
                  href="https://emmanuel-nwafor.github.io/"
                  className=" text-gray-400 "
                >
                  Visit site
                </a>
              </span>
            </div>
          </div>
        </div>
        <br />
        <br />
        <br />
      </div>
    </>
  );
}
export default Projects;
