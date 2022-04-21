import React from "react";
import masterClass from "../../images/education/masterClass.png";
import semana_ciencia from "../../images/education/semanaCiencia.png";
import herramientasWeb from "../../images/education/herramientasWeb.png";
import aprendeJavaScript from "../../images/education/AprendeJavaScript.jpg";

import masterClass_PDF from "../../documents/CertificadoMasterClass.pdf";
import semana_ciencia_PDF from "../../documents/CertificadoSemanaCiencia.pdf";
import herramientasWeb_PDF from "../../documents/CertificadoHerramientasWeb.pdf";
import aprendeJavaScript_PDF from "../../documents/CertificadoAprendeJavaScript.pdf";
import { CardEducation } from "./CardEducation";

export const Education = () => {
  return (
    <div className="pt-32">
      <p className="absolute -my-2 font-bold text-black text-opacity-20 text-6xl lg:text-opacity-10 p-5">Educación</p>
      <h2 className="text-7xl text-shadow-sm p-11 text-black ">Educación</h2>
      <div className=" flex flex-col w-full min-w-0 break-words rounded-b-sm shadow-lg">
        <div className="flex-auto py-5">
          <div className="tab-content tab-space">
            <div className="flex-wrap justify-center sm:flex pb-20">
              <CardEducation img={masterClass} type="Programación Web" title="Master className: Tecnologías de la Web Semántica" entity="UTMACH" date="Diciembre-2021" doc={masterClass_PDF} title_pdf="Certificado Master className: Tecnologías de la Web Semántica" />
              <CardEducation img={semana_ciencia} type="Programación Web" title="Semana de la Ciencia UTMACH periodo 2021" entity="UTMACH" date="Noviembre-2021" doc={semana_ciencia_PDF} title_pdf="Certificado Semana de la Ciencia UTMACH periodo 2021" />
              <CardEducation img={herramientasWeb} type="Programación Web" title="Conocimiento en Herramientas Web y Tecnologías de la Información" entity="UTMACH" date="Enero-2019" doc={herramientasWeb_PDF} title_pdf="Certificado Conocimiento en Herramientas Web y Tecnologías de la Información" />
              <CardEducation img={aprendeJavaScript} type="Programación Web" title="Aprende JavaScript ES9, HTML, CSS3 y NodeJS desde cero" entity="UDEMY" date="Abril-2022" doc={aprendeJavaScript_PDF} title_pdf="Certificado Aprende JavaScript ES9, HTML, CSS3 y NodeJS desde cero" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
