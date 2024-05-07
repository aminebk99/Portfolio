import React from "react";
import amineImage from "../../public/amine.png";

const AboutMe = () => {
  return (
    <div className="mx-auto  md:flex md:flex-row  max-w-7xl items-center justify-between p-6 lg:px-8">
      <div className="md:w-full flex justify-center md:justify-start my-10">
        <img
          className="transform scale-x-[-1] h-auto max-h-80"
          src={amineImage}
          alt="amine.png"
        />
      </div>
      <div className="md:w-1/2  md:flex md:flex-col md:justify-center ">
        <h4 className="lg:text-2xl font-bold md:text-start text-center">
          About Me
        </h4>
        <p className="mx-8 md:mx-0 my-4 text-gray-600 md:text-start text-center">
          I am actively seeking opportunities to apply my acquired skills and
          knowledge to real-world projects. My educational background has
          equipped me with a solid foundation in AI and ML algorithms, data
          analysis, and programming languages such as Python. Additionally, I
          have gained practical experience through hands-on projects, both
          independently and collaboratively.
        </p>
      </div>
    </div>
  );
};
export default AboutMe;
