import React from "react";

import { FaInstagram } from "react-icons/fa6";
import { FaWhatsapp } from "react-icons/fa";

function Hero() {
  return (
    <section className="flex justify-between gap-16 items-center">
      <div className="relative w-full flex flex-col gap-7">
        <h1 className="text-5xl md:text-7xl font-medium">
          Todo el software que
          <br /> <span className="text-gradient">
            necesitas a un click
          </span>{" "}
          <br /> de distancia
        </h1>
        <p className="text-md md:text-2xl text-neutral-500">
          Desarrollamos el software que se adapta <br /> a tus
          necesidades.
        </p>

        <div className="flex gap-5">
          <a
            href="https://wa.link/fnh2h2"
            className="bg-gradient text-xl flex items-center gap-3 px-5 py-3 rounded-full"
          >
            Contacto <FaWhatsapp />
          </a>
          <a
            href="https://www.instagram.com/nv.dev_/"
            className="bg-gradient text-xl p-4 rounded-full "
          >
            <FaInstagram />
          </a>
        </div>
        <div className="absolute pink__gradient w-[40%] left-[60%] h-[40%] rounded-full top-0 z-[0]" />
      </div>
    </section>
  );
}

export default Hero;
