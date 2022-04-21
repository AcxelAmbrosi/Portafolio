import React from "react";
import { AboutMe } from "../components/About/AboutMe";
import { Education } from "../components/About/Education";
import { Skills } from "../components/About/Skills";
import { Modal } from "../components/Modal";
export const About = ({ modal }) => {
  return (
    <div>
      <AboutMe />
      <Skills />
      <Education />
      {modal ? <Modal /> : <></>}
    </div>
  );
};
