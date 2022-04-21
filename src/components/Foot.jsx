import React from "react";
import { FaGithubSquare } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaTwitterSquare } from "react-icons/fa";
export const Foot = () => {
  return (
    <div className="bg-purple-800">
      <div className="flex flex-col justify-around text-center items-center p-9 flex-center text-white lg:flex-row">
        <div>
          <p className="text-4xl pb-2	">ACXL Dev</p>
          <p>Soy Acxel Ambrosi y esta es mi pagina web hecha con el ♥</p>
        </div>
        <div>
          <div className="flex justify-center m-3">
            <a href="https://github.com/AcxelAmbrosi" target="_blank" rel="noreferrer">
              <FaGithubSquare className="text-5xl" />
            </a>
            <a href="https://twitter.com/Acxel_Ambrosi" target="_blank" rel="noreferrer">
              <FaTwitterSquare className="text-5xl" />
            </a>
            <a href="https://www.linkedin.com/in/acxelambrosi/" target="_blank" rel="noreferrer">
              <FaLinkedin className="text-5xl" />
            </a>
          </div>
          <p className="text-sm">
            {" "}
            Copyright © acxl-dev.herokuapp.com 2022. <br />
            Todos los derechos reservados.
          </p>
        </div>
      </div>
    </div>
  );
};
