import React from "react";

import { FaInstagram } from "react-icons/fa6";
import { FaWhatsapp } from "react-icons/fa";

function Contact() {
  return (
    <section className="relative text-center">
      <div className="absolute pink__gradient w-[50%] left-full h-[50%] rounded-full top-0 z-[0]" />

      <h1 className="text-6xl font-medium text-gradient">
        Hablemos sobre su proyecto
      </h1>
      <p className="text-xl my-10 text-neutral-500">
        ¿Interesado en nuestros servicios? Contáctanos y descubre cómo <br />{" "}
        podemos colaborar para hacer crecer tu negocio.
      </p>
      <div className="flex gap-5 justify-center">
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
    </section>
  );
}

export default Contact;
