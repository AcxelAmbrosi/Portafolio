import React from "react";
import { CardPortfolio } from "./CardPortfolio";
import rickAndMorty from "../../images/projects/rickAndMorty.png";
import portfolio from "../../images/projects/portfolio.png";
import pern from "../../images/projects/pern.png";
export const Portfolio = () => {
  return (
    <section>
      <div className="bg-purple-800	 pb-32">
        <p className="absolute -my-2 font-bold text-white text-opacity-20 text-6xl lg:text-opacity-10 p-5">Portafolio</p>
        <h2 className="text-7xl text-shadow-sm p-11 text-white	 ">Portafolio</h2>
        <div className="flex flex-wrap justify-center">
          <CardPortfolio image={rickAndMorty} title="Rick and Morty APP" description="Rick and Morty APP es un sitio web donde podras encontrar informacion acerca de los personajes, capitulos y temporadas de la serie de Netflix Rick and Morty." type="SERVICIO" url="https://github.com/AcxelAmbrosi/RickAndMorty" />
          <CardPortfolio image={portfolio} title="Portafolio" description="Este es mi Sitio Web personal donde podrás encontrar mi información personal, habilidades, proyectos y certificados que he adquirido a lo largo de mi formación como desarrollador web." type="INFORMACIÓN" url="https://github.com/AcxelAmbrosi/Portafolio" />
          <CardPortfolio image={pern} title="Administrador de Tareas" description="Este es un sitio web creado para poder gestionar tus tareas diarias, se desarrollo haciendo uso de la libreria React en el frontEnd y NodeJS en el BackEnd." type="ADMINISTRACIÓN" url="https://github.com/AcxelAmbrosi/PERN-Stack" />
        </div>
      </div>
    </section>
  );
};
