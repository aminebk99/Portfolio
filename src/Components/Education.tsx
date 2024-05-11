import React from "react";

const Education = () => {
  return (
    <div className="w-full grid grid-cols-10">
      <div className="col-span-4 flex justify-center items-center flex-col">
        <div className="px-8 md:px-16 py-4 bg-blue-700 rounded-full flex justify-center items-center">
          <h4 className="text-white lg:text-2xl font-bold text-center">
            Experience
          </h4>
        </div>
        <p>text</p>
      </div>
      <div className=" flex justify-center col-span-2">
        {/* <div className="px-8 py-2 bg-blue-700 rounded-full flex justify-center items-center">
          
        </div> */}
      </div>
      <div className="col-span-4 flex flex-col justify-center items-center">
        <div className="px-8 md:px-16 py-4 bg-blue-700 rounded-full flex justify-center items-center">
          <h4 className=" text-white lg:text-2xl font-bold text-center">
            Education
          </h4>
        </div>
        <div>
          <p>text</p>
        </div>
      </div>
    </div>
  );
};

export default Education;
