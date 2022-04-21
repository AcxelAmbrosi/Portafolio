import React from "react";
import html_icon from "../../images/skills/html.png";
import css_icon from "../../images/skills/css.png";
import js_icon from "../../images/skills/js.png";
import react_icon from "../../images/skills/react.png";
import node_icon from "../../images/skills/node.png";
import linux_icon from "../../images/skills/linux.png";
import git_icon from "../../images/skills/github.png";
import tailwindss_icon from "../../images/skills/tailwindcss.png";
import bootstrap_icon from "../../images/skills/bootstrap.png";
import postgresql_icon from "../../images/skills/postgresql.png";

export const Skills = () => {
  return (
    <div>
      <p className="absolute -my-2 font-bold text-black text-opacity-20 text-6xl lg:text-opacity-10 p-5">Habilidades</p>
      <h2 className="text-7xl text-shadow-sm p-11 text-black ">Habilidades</h2>
      <div className="flex flex-wrap justify-center md:pt-12 xl:mx-20">
        <div className="p-7">
          <img src={html_icon} alt="" />
          <p className="pt-2 text-sm font-medium text-center"> HTML</p>
        </div>
        <div className="p-7">
          <img src={css_icon} alt="" />
          <p className="pt-2 text-sm font-medium text-center">CSS3</p>
        </div>
        <div className="p-7">
          <img src={js_icon} alt="" />
          <p className="pt-2 text-sm font-medium text-center">JavaScript</p>
        </div>
        <div className="p-7">
          <img src={react_icon} alt="" />
          <p className="pt-2 text-sm font-medium text-center">ReactJS</p>
        </div>
        <div className="p-7">
          <img src={tailwindss_icon} alt="" />
          <p className="pt-2 text-sm font-medium text-center">TailwindCSS</p>
        </div>
        <div className="p-7">
          <img src={bootstrap_icon} alt="" />
          <p className="pt-2 text-sm font-medium text-center">Bootstrap</p>
        </div>
      </div>
        <div className="w-5/6 h-px  mx-auto bg-black  sm:mt-12 sm:w-3/6"></div>
      <div className="flex flex-wrap justify-center md:pt-12 xl:mx-20">
        <div className="p-7">
          <img src={git_icon} alt="" />
          <p className="pt-2 text-sm font-medium text-center">GitHub</p>
        </div>
        <div className="p-7">
          <img src={linux_icon} alt="" />
          <p className="pt-2 text-sm font-medium text-center">Linux</p>
        </div>
        <div className="p-7">
          <img src={node_icon} alt="" />
          <p className="pt-2 text-sm font-medium text-center">NodeJS</p>
        </div>
        <div className="p-7">
          <img src={postgresql_icon} alt="" />
          <p className="pt-2 text-sm font-medium text-center">PostgreSQL</p>
        </div>
      </div>
    </div>
  );
};
