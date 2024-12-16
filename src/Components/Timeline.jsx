import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const timelineData = [
  {
    id: 1,
    title: "Web Developer",
    date: "January 2023 - Till Date",
    description: (
      <>
        <div className="flex ">
          <li></li>
          <p className="">
            Development and maintainance of websites and web applications using
            technologies like React.js and other related technologies.
          </p>
        </div>
        <br />
        <div className="flex ">
          <li></li>
          <p className="">
            Collaborating with different teams like designers and other team of
            developers .
          </p>
        </div>
        <br />
        <div className="flex ">
          <li></li>
          <p className="">
            Participating in code reviews and providing constructive feedback to
            other developers.
          </p>
        </div>
        {/* <br />
        <div className="flex ">
          <li></li>
          <p className="">
            Development and maintainance of websites and web applications using
            technologies like React.js and other related technologies.
          </p>
        </div> */}
        <br />
        <br />
      </>
    ),
  },
  {
    id: 2,
    title: "Software Developer",
    date: "December 2024 - Till Date",
    description: (
      <>
        <div className="flex ">
          <li></li>
          <p className="">
            Collaborating with stakeholders to understand project requirements
            and objectives.
          </p>
        </div>
        <br />
        <div className="flex ">
          <li></li>
          <p className="">
            Designing software solutions, including architecture, user
            interfaces, and workflows.
          </p>
        </div>
        <br />
        <div className="flex ">
          <li></li>
          <p className="">
            Creating detailed technical specifications and documentation for
            projects.
          </p>
        </div>
        <br />
        <div className="flex ">
          <li></li>
          <p className="">
            Writing clean, efficient, and maintainable code with React and React
            Native. Also performing unit testing to ensure individual components
            function correctly, debugging and resolving errors in code to
            maintain software quality.
          </p>
        </div>
        <br />
        <br />
      </>
    ),
  },
  {
    id: 3,
    title: "Version Control Management",
    date: "January 2023 - Till Date",
    description: (
      <>
        <div className="flex ">
          <li></li>
          <p className="">
            Recording every changes made to clients projects, maintaining a
            detailed history of who made the changes, what changes were made,
            and when they were made.
          </p>
        </div>
        <br />
        <div className="flex ">
          <li></li>
          <p className="">
            Enables multiple developers to work on the same project
            simultaneously without overwriting each other’s work. Facilitates
            merging of code from different team members, even if they are
            working on different parts of the project.
          </p>
        </div>
        <br />
        <br />
      </>
    ),
  },
  // {
  //   id: 4,
  //   title: "Step 4: Development",
  //   date: "April 2023",
  //   description: "Develop the core functionality and features. ",
  // },
];

function Timeline() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      easing: "ease-in-out",
      once: true,
    });
  }, []);

  return (
    <>
      <div className="container mx-auto px-4 py-8">
        <div className="relative border-l border-gray-200 dark:border-gray-700">
          {timelineData.map((item) => (
            <div key={item.id} className="mb-10 ml-6">
              <span className="absolute w-5 h-5 bg-slate-600 rounded-full -left-2.5 border border-white"></span>
              <div
                data-aos="fade-right"
                data-aos-duration="500"
                className="bg-white dark:bg-gray-800 p-4 rounded-lg shadow-md"
              >
                <h3 className="text-lg font-semibold text-gray-800 dark:text-gray-100">
                  {item.title}
                </h3>
                <span className="block text-sm text-gray-500 dark:text-gray-400">
                  {item.date}
                </span>
                <p className="mt-2 text-gray-600 dark:text-gray-300">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
      <br />
      <br />
    </>
  );
}

export default Timeline;
