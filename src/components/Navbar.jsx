import React from "react";

import { nav } from "../constants";
import { FaWhatsapp } from "react-icons/fa";

function Navbar() {
  return (
    <nav className="flex justify-between items-center">
      <img src="./logo.png" alt="" className="max-w-[180px] md:max-w-[250px]" />

      <div className="hidden md:flex gap-10 items-center ">
        <a
          href="https://wa.link/fnh2h2"
          className=" bg-gradient text-xl flex items-center gap-3 px-5 py-3 rounded-full"
        >
          Contacto <FaWhatsapp />
        </a>
      </div>
      <a
        href="https://wa.link/fnh2h2"
        className="md:hidden bg-gradient text-md flex items-center gap-2 px-3 py-2 rounded-full"
      >
        Conatacto
        <FaWhatsapp />
      </a>
    </nav>
  );
}

export default Navbar;
