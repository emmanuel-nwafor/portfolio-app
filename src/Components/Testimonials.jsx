import img from "/src/assets/img.jpeg";
import img2 from "/src/assets/blessing.jpg";
import img3 from "/src/assets/bright.jpeg";
import img4 from "/src/assets/beloved.jpeg";
import img11 from "/src/assets/img11.jpg";

import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

function Testimonials() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      easing: "ease-in-out",
      once: true,
    });
  }, []);

  return (
    <>
      {" "}
      <div className="">
        <h1 className=" text-gray-400 text-[23px] font-semibold ">
          WHAT PEOPLE SAY
        </h1>{" "}
        <hr />
        <br />
        <br />
        <div className=" xl:flex ">
          <div className="">
            <div
              data-aos="fade-in"
              data-aos-duration="600"
              className=" bg-[#4b4b4b] rounded-lg m-2 p-[100px] max-md:p-[30px] "
            >
              <div className=" flex justify-between ">
                <div className=" flex ">
                  <img
                    src={img}
                    alt=""
                    className=" h-[40px] w-[40px] rounded-full m-2 "
                  />
                  <div className="flex-col">
                    <h1 className=" font-semibold text-[15px] text-blue-100 ">
                      GraceKid Tech
                    </h1>
                    <p className=" text-slate-300 ">Full-Stack Dev</p>
                  </div>
                </div>
                <p className=" text-blue-300 max-md:hidden">2/5/2024</p>
              </div>{" "}
              <br />
              <i class="bx bxs-quote-alt-left text-[50px] text-blue-400 "></i>
              <p className=" text-blue-200 ">
                Working with Emmanuel has been an incredible experience. His
                technical expertise and problem-solving skills are unparalleled.
                Whenever we face a challenge, he come up with creative,
                efficient solutions that not only fix the issue but improve the
                project overall. His is also a fantastic team player, always
                willing to help others and explain complex concepts in a way
                that's easy to understand.
              </p>
              <br />
              <br />
              <p className=" text-blue-300 md:hidden">2/5/2024</p>
            </div>
            {/* ////////////////////////////////////////////// */}
            <div className=" bg-gray-500 rounded-lg m-2 p-[117px] max-md:p-[30px] ">
              <div className=" flex  justify-between ">
                <div className=" flex ">
                  <img
                    src={img3}
                    alt=""
                    className=" h-[40px] w-[40px] rounded-full m-2 "
                  />
                  <div className="flex-col">
                    <h1 className=" font-semibold text-[15px] text-blue-100 ">
                      Bright Chibuike
                    </h1>
                    <p className=" text-slate-300 ">Content Creator</p>
                  </div>
                </div>
                <p className=" text-blue-300 max-md:hidden">2/5/2023</p>
              </div>{" "}
              <br />
              <i class="bx bxs-quote-alt-left text-[50px] text-blue-400 "></i>
              <p className=" text-blue-200  ">
                Emmanuel is an absolute professional and a pleasure to work
                with. He delivered a high-quality service that exceeded my
                expectations, and his attention to detail was evident throughout
                the project. What impressed me most was his ability to listen to
                my needs and translate them into a seamless, user-friendly
                application. I would highly recommend Emmanuel to anyone looking
                for a skilled and reliable developer.
              </p>
              <br />
              <br />
              <p className=" text-blue-300 md:hidden">2/5/2023</p>
            </div>
          </div>
          {/* ////////////////////////////////////// */}
          <div className="">
            <div className=" bg-gray-500 rounded-lg m-2 p-[110px] max-md:p-[30px] ">
              <div className=" flex  justify-between ">
                <div className=" flex ">
                  <img
                    src={img4}
                    alt=""
                    className=" h-[40px] w-[40px] rounded-full m-2 "
                  />
                  <div className="flex-col">
                    <h1 className=" font-semibold text-[15px] text-blue-100 ">
                      Joshua
                    </h1>
                    <p className=" text-slate-300 ">Full-Stack Dev</p>
                  </div>
                </div>
                <p className=" text-blue-300 max-md:hidden">10/9/2024</p>
              </div>{" "}
              <br />
              <i class="bx bxs-quote-alt-left text-[50px] text-blue-400 "></i>
              <p className=" text-blue-200  ">
                Emmanuel Nwafor has been an incredible mentor ,friend and role
                model. He've helped me grow both technically and professionally,
                always taking the time to guide me through challenges and share
                his knowledge. His passion for development and his commitment to
                helping others succeed make him an invaluable part of any team.
              </p>{" "}
              <br />
              <br />
              <p className=" text-blue-300 md:hidden">10/9/2024</p>
            </div>
            <div
              data-aos="fade-in"
              data-aos-duration="600"
              className=" bg-[#4b4b4b] rounded-lg m-2 p-[76.9px] max-md:p-[30px] "
            >
              <div className=" flex justify-between ">
                <div className=" flex ">
                  <img
                    src={img11}
                    alt=""
                    className=" h-[40px] w-[40px] rounded-full m-2 "
                  />
                  <div className="flex-col">
                    <h1 className=" font-semibold text-[15px] text-blue-100 ">
                      Obi Christian
                    </h1>
                    <p className=" text-slate-300 ">Electrical Engineer</p>
                  </div>
                </div>
                <p className=" text-blue-300 max-md:hidden">1/11/2023</p>
              </div>{" "}
              <br />
              <i class="bx bxs-quote-alt-left text-[50px] text-blue-400 "></i>
              <p className=" text-blue-200 ">
                Emmanuel is an exceptional developer who truly understands the
                intersection of technology and business. He actively contribute
                to discussions about product features and always find ways to
                add value through thoughtful and innovative solutions. He is
                very instrumental in helping us achieve our goals on time and
                within budget.
              </p>
              <br />
              <br />
              <p className=" text-blue-300 md:hidden">1/11/2023</p>
            </div>
          </div>
        </div>
        {/* ////////////////////////////////////////// */}
        <div className=" bg-gray-500 rounded-lg m-2 p-[40px] max-md:p-[30px] ">
          {" "}
          <div className=" flex  justify-between ">
            <div className=" flex ">
              <img
                src={img2}
                alt=""
                className=" h-[40px] w-[40px] rounded-full m-2 "
              />
              <div className="flex-col">
                <h1 className=" font-semibold text-[15px] text-blue-100 ">
                  Blessing Nwankwo
                </h1>
                <p className=" text-slate-300 ">Digital Marketer</p>
              </div>
            </div>
            <p className=" text-blue-300 max-md:hidden">1/11/2023</p>
          </div>{" "}
          <br />
          <i class="bx bxs-quote-alt-left text-[50px] text-blue-400 "></i>
          <p className=" text-blue-200 ">
            Indeed Emmanuel is one with exeptional value and a developer that i
            would recommend to everyone, because if his honesty, zeal and
            eagerness to know more.
          </p>
          <br />
          <br />
          <p className=" text-blue-300 md:hidden">1/11/2023</p>
        </div>
      </div>
      <br />
      <br />
    </>
  );
}
export default Testimonials;
