import React from "react";
import cv_AcxelAmbrosi_PDF from "../../documents/CV_AcxelAmbrosi.pdf";
// import arrow from "../../images/arrow.png";
export const WelcomeBack = () => {
  return (
    <div
      className="
         flex  items-start justify-center h-screen
           bg-cover bg-center bg-fixed bg-no-repeat bg-[url('/src/images/backgroundMobile2.png')] sm:bg-[url('/src/images/background.png')]
          "
    >
      <div className="flex flex-col">
        <h1 className=" mt-40 text-5xl text-center lg:text-6xl xl:text-7xl">Hola, Soy Acxel Ambrosi</h1>
        <p className="flex justify-center mt-10 text-2xl text-slate-500 lg:text-3xl xl:text-4xl">Soy desarrollador Web !</p>
        <div className="flex justify-center">
          <a href={cv_AcxelAmbrosi_PDF} download="CV_AcxelAmbrosi" type="button" aria-label="like">
            <button className="rounded-full w-48 h-11 shadow-lg shadow-red-500 bg-red-50 mt-20 text-xl text-slate-900 ">Descarga mi CV</button>
          </a>
        </div>
        <div className="flex justify-center xl:mt-32">{/* <img className="animate-bounce w-14 mt-80 sm:mt-72 lg:mt-72 xl:mt-96" src={arrow} alt="" /> */}</div>
      </div>
    </div>
  );
};
