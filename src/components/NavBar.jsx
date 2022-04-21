import React from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { useNavigate } from "react-router-dom";
export const NavBar = ({ stateModal, setModal }) => {
  const navigate = useNavigate();
  const handleModal = () => {
    setModal(!stateModal);
  };
  return (
    <div className="fixed top-0 right-0 left-0">
      <div className="flex pt-3 pb-3 items-center justify-between bg-red-200 ">
        <div className="flex basis-6/12  ml-11">
          <div className="text-3xl">ACXL Dev</div>
        </div>
        <div className="flex basis-6/12 justify-end mr-8 lg:hidden">
          <div className="text-3xl p-2 text-gray-500 rounded-full shadow-lg bg-white	">
            <GiHamburgerMenu
              onClick={() => {
                handleModal();
              }}
              />
          </div>
        </div>
        <div className="hidden lg:flex ">
          <div className="flex ">
            <div className="mx-3  hover:bg-rose-50 cursor-pointer p-3 rounded-lg" onClick={() => navigate("/")}>
              Inicio
            </div>
            <div className="mx-3 hover:bg-rose-50	cursor-pointer p-3 rounded-lg" onClick={() => navigate("/about")}>
              Sobre mi
            </div>
            <div className="mx-3 hover:bg-rose-50	cursor-pointer p-3 rounded-lg" onClick={()=>navigate('/contact')}>Contacto</div>
            <div className="mx-5 hover:bg-rose-50	cursor-pointer p-3 rounded-lg">Blog</div>
          </div>
        </div>
      </div>
    </div>
  );
};
