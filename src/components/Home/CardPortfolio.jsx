import React from "react";
export const CardPortfolio = ({ image, title, description, type, url }) => {
  return (
    <div className="md:mx-4">
      <img src={image} alt="Imagen-Card" className="w-full max-w-sm mx-auto mt-6 rounded-t"></img>
      <div className="w-full max-w-sm px-4 py-3 mx-auto bg-white shadow-md md:mt-0 rounded-b-md dark:bg-gray-800">
        <div>
          <div className="flex items-center justify-between">
            <span className="text-sm font-light text-gray-400 dark:text-gray-400">{type}</span>
          </div>
          <div>
            <h1 className="mt-2 text-lg font-semibold text-gray-800 dark:text-white">{title}</h1>
            <p className="mt-2 text-sm text-gray-600 dark:text-gray-300">{description}</p>
          </div>
        </div>
        <div>
          <div className="flex items-center mt-2 text-gray-700 dark:text-gray-200">
            <span>Ver repositorio en:</span>
            <a className="mx-2 cursor-pointer text-honey text-pink-500 dark:text-blue-400 hover:underline hover:text-yellow-300" href={url} target="_blank" rel="noreferrer">
              gitHub/
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
