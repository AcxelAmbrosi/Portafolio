import React from "react";
import { useNavigate } from "react-router-dom";
import mision from "../../images/mision.png";

export const Mision = () => {
  const navigate = useNavigate();
  return (
    <section>
      <div className="mb-32">
        <p className="absolute -my-2 font-bold text-black text-opacity-20 text-5xl lg:text-6xl lg:text-opacity-10 p-5">Mi misión</p>
        <h2 className="text-6xl lg:text-7xl text-shadow-sm p-11 text-black	 ">Mi misión</h2>

        <div className="flex flex-col lg:flex-row justify-center items-center px-5">
          <div className="flex flex-col items-center">
            <p className="p-4 text-slate-500 xl:text-4xl sm:text-2xl lg:text-2xl	">
              Desarrollar sitios web de <span className="text-slate-800 font-bold">alta calidad</span>, tomando como prioridad el cumplimiento de todos los <span className="text-slate-800 font-bold">requerimientos</span> solicitados por el cliente.
              <br />
              <br />
              El apartado <span className="text-slate-800 font-bold">estético </span> y el <span className="text-slate-800 font-bold">rendimiento</span> son las principales características a destacar en los proyectos de <span className="text-slate-800 font-bold">ACXL Dev</span>, me tomo muy enserio cada nuevo proyecto para cumplir con todas las expectativas de mis clientes.
            </p>
            <button className="rounded-full bg-sky-400 p-3 w-60 m-7" onClick={() => navigate("/contact")}>
              Hagámoslo realidad!
            </button>
          </div>
          <img className=" " src={mision} alt="" />
        </div>
      </div>
    </section>
  );
};
