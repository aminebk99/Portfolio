import React, { useState } from "react";
import { MdArrowBackIosNew, MdArrowForwardIos } from "react-icons/md";

const Certificate = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const images = [
    "https://via.placeholder.com/300",
    "https://via.placeholder.com/300",
    "https://via.placeholder.com/300",
    "https://via.placeholder.com/300",
    "https://via.placeholder.com/300"
  ];

  const handlePrev = () => {
    setCurrentIndex((prevIndex) => Math.max(prevIndex - 1, 0));
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      Math.min(prevIndex + 1, images.length - 1)
    );
  };

  return (
    <div className="flex flex-col justify-center items-center">
      <h2 className="text-5xl font-bold my-4 text-shadow-sm">Certificate</h2>
      <div className="relative w-full overflow-hidden">
        <div className="flex  items-center">
          {currentIndex > 0 && (
            <button className="" onClick={handlePrev}>
              <MdArrowBackIosNew />
            </button>
          )}
          <div className="relative w-full flex justify-center">
            {images.map((image, index) => (
              <div
                key={index}
                className={`transform transition-transform ${
                  index === currentIndex
                    ? "scale-100"
                    : Math.abs(currentIndex - index) === 1
                    ? "scale-50"
                    : "hidden"
                }`}
              >
                <img
                  src={image}
                  alt={`Certificate ${index}`}
                  className="max-w-full max-h-80"
                />
              </div>
            ))}
          </div>
          {currentIndex < images.length - 1 && (
            <button className="absolute top-0 bottom-0 right-0 z-10" onClick={handleNext}>
              <MdArrowForwardIos />
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default Certificate;