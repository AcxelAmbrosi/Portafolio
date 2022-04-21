import React from "react";
import profile from "../../images/profile.jpg";

export const AboutMe = () => {
  return (
    <div className="pt-32">
      <p className="absolute -my-2 font-bold text-black text-opacity-20 text-6xl lg:text-opacity-10 p-5">Sobre mi</p>
      <h2 className="text-7xl text-shadow-sm p-11 text-black ">Sobre mi</h2>
      <div className="flex flex-col lg:flex-row justify-center items-center px-5 mb-20">
        <div className="flex flex-col items-center">
          <p className="p-4 text-slate-500 xl:text-4xl sm:text-2xl lg:text-2xl xl:mr-80	">
            Mi nombre es Acxel Ambrosi, <span className="text-slate-800 font-bold">estudiante de ingeniería en tecnologías de la información</span> con grandes capacidades de resolución de problemas dentro del área en que me desempeñe, incluso en condiciones de <span className="text-slate-800 font-bold">alta presión</span>. Cuento con experiencia en desarrollo de sistemas web de forma colaborativa en modalidad FreeLancer. Me considero una persona muy <span className="text-slate-800 font-bold">responsable, dinámica, adaptable y creativa.</span>
          </p>
        </div>
        <img className="rounded-lg lg:mr-48  w-72 sm:w-72 lg:w-80 " src={profile} alt="" />
      </div>
    </div>
  );
};
