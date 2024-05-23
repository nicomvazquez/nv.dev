import React from "react";

import { nav } from "../constants";
import { FaWhatsapp } from "react-icons/fa";

function Navbar() {
  return (
    <nav className="flex justify-between items-center">
      <img src="./logo.png" alt="" className="max-w-[200px] md:max-w-[270px]" />

      <div className="hidden md:flex gap-10 items-center ">
        {nav.map((i) => {
          return (
            <a
              key={i.title}
              href={i.path}
              className="text-lg font-semibold text-white hover:text-[#C44DC6] transition-all"
            >
              {i.title}
            </a>
          );
        })}

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
