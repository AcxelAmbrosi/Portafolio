import React from "react";
import { Mision } from "../components/Home/Mision";

import { Portfolio } from "../components/Home/Portfolio";
import { WelcomeBack } from "../components/Home/WelcomeBack";
import { Modal } from "../components/Modal";

export const Home = ({ modal }) => {
  return (
    <>
      <main>
        <WelcomeBack />
        <Portfolio />
        <Mision />
        {modal ? <Modal /> : <></>}
      </main>
    </>
  );
};
