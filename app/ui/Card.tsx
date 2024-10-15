import React from "react";

function Card({
  title,
  discription,
  path,
  difficulty,
}: {
  title: string;
  discription: string;
  path: string;
  difficulty: string;
}) {
  return (
    <a className="lg:col-span-4 md:col-span-6 col-span-12" href={path}>
      <div className="bg-white shadow-lg rounded-lg overflow-hidden">
        <div className="flex">
          <div className="bg-blue-500 min-w-2"></div>
          <div className="p-6">
            <h2 className="font-bold text-md relative z-10">{title}</h2>
            <p className="h-16 font-normal text-md text-gray-700 relative z-10 my-4">
              {discription}
            </p>
            <p className="min-h-4 text-md">{difficulty}</p>
          </div>
        </div>
      </div>
    </a>
  );
}

export default Card;
