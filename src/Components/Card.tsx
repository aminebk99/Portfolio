import React from "react";

interface CardProps {
  id: number,
  title: string,
  description: string,
  githubUrl: string,
  previewUrl: string
}

const Card: React.FC<CardProps> = (props) => {
  return (
    <div>
      <div className="max-w-sm rounded overflow-hidden shadow-lg">
        <img
          className="w-full"
          src="/img/card-top.jpg"
          alt="Sunset in the mountains"
        />
        <div className="px-6 py-4">
          <div className="font-bold text-xl mb-2">{props.title}</div>
          <p className="text-gray-700 text-base">
           {props.description}
          </p>
        </div>
        <div className="px-6 pt-4 pb-2 flex justify-between">
          <a href={props.previewUrl} className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#Preview</a>
          <a href={props.githubUrl} className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#Github</a>
        </div>
      </div>
    </div>
  );
};

export default Card;
