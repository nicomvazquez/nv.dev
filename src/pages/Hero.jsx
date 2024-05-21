import React from "react";

import { FaInstagram } from "react-icons/fa6";
import { FaWhatsapp } from "react-icons/fa";

function Hero() {
  return (
    <section className="flex justify-between items-center">
      <div className="flex flex-col gap-5">
        <h1 className="text-5xl md:text-6xl font-medium">
          Impulsamos tu negocio <br />{" "}
          <span className="text-gradient">con tecnologia</span> <br /> a medida
        </h1>
        <p className="text-md md:text-2xl text-neutral-500">
          Desarrollo de software personalizado que se adapta <br /> a tus
          necesidades.
        </p>

        <div className="flex gap-5">
          <a
            href="https://wa.link/fnh2h2"
            className="bg-gradient text-xl flex items-center gap-3 px-5 py-3 rounded-full"
          >
            contacto <FaWhatsapp />
          </a>
          <a
            href="https://www.instagram.com/nv.dev_/"
            className="bg-gradient text-xl p-4 rounded-full "
          >
            <FaInstagram />
          </a>
        </div>
      </div>

      <img src="./home-img.png" alt="" className="hidden sm:block" />
    </section>
  );
}

export default Hero;
