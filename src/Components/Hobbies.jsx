import React from "react";

const hobbies = [
  {
    name: <p className="text-gray-100">Working Out</p>,
    icon: <i class="bx bx-dumbbell text-zinc-200 text-[50px] "></i>,
  },
  {
    name: <p className="text-gray-100">Reading</p>,
    icon: <i class="bx bx-book text-yellow-700 text-[50px]"></i>,
  },
  {
    name: <p className="text-gray-100">Exploring</p>,
    icon: <i class="bx bx-world text-green-500 text-[50px]"></i>,
  },
];

function Hobbies() {
  return (
    <>
      <div id="hobbies"></div>
      <section className="py-10 p-[45px] bg-gray-500 text-center rounded-xl">
        <div className="flex justify-center flex-wrap gap-8 text-gray-100">
          {hobbies.map((hobby, index) => (
            <div
              key={index}
              className="flex flex-col items-center bg-slate-500 shadow-md rounded-lg p-6 w-40 hover:shadow-lg transition-shadow"
            >
              <span className="text-4xl mb-4">{hobby.icon}</span>
              <p className="text-lg font-medium text-gray-600">{hobby.name}</p>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}

export default Hobbies;
