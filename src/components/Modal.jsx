import React from "react";
import { useNavigate } from "react-router-dom";

export const Modal = () => {
  const navigate = useNavigate();
  return (
    <div className="h-305 w-40 fixed top-16 right-6 rounded-md bg-rose-50">
      <div className="flex flex-col lg:hidden">
        <button className="p-6 hover:bg-red-200 drop-shadow-xl" onClick={() => navigate("/")}>
          Inicio
        </button>
        <button className="p-6 hover:bg-red-200 drop-shadow-xl" onClick={() => navigate("/about")}>
          Sobre Mi
        </button>
        <button className="p-6 hover:bg-red-200 drop-shadow-xl" onClick={() => navigate("/contact")}>
          Contacto
        </button>
        <button className="p-6 hover:bg-red-200 drop-shadow-xl">Blog</button>
      </div>
    </div>
  );
};
