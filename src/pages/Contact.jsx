import React from "react";
import { Modal } from "../components/Modal";
import contact from "../images/contact.jpg";
export const Contact = ({ modal }) => {
  return (
    <div className="grid-cols-1 p-4 sm:grid sm:grid-cols-2 sm:p-10 lg:px-20 lg:pt-20">
      <div className="col-start-1  row-start-1">
        <div className="pb-32">
          <div className="px-2 pt-4">
            <div className="circle"></div>
          </div>
          <p className="absolute -my-2 font-bold text-black text-opacity-20 text-6xl lg:text-opacity-10 p-5">Contacto</p>
          <h2 className="text-7xl text-shadow-sm p-11 text-black ">Contacto</h2>
        </div>
        <h2 className="text-4xl font-bold text-center sm:px-10 sm:text-left">¡Escríbeme!</h2>
        <div className="pt-10 text-2xl text-center sm:pl-10 sm:text-left">
          <p className="sm:pr-5 text-slate-500">Puedes realizarme cualquier pregunta o propuesta hacerca de tu proyecto u empresa.</p>
        </div>
        <div className="pt-10 pl-4 sm:pl-10">
          <div className="">
            <p className="pb-2 text-sm font-bold">Correo</p>
            <a href="mailto:contact@federicocadena.com" className="hover:text-yellow-500 hover:underline">
              acxelandres@outlook.com
            </a>
          </div>
          <div className="pt-4">
            <p className="pb-2 text-sm font-semibold">Teléfono</p>
            <a href="tel:7721125436" className="hover:text-yellow-500 hover:underline">
              +593 990321227
            </a>
          </div>
        </div>
      </div>
      <div className="pb-2">
        <img src={contact} alt="" />
      </div>
      {modal ? <Modal /> : <></>}
    </div>
  );
};
