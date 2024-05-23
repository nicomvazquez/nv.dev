import React from "react";

import { ServiceTag } from "../components";

import { service } from "../constants";

function Servicios() {
  return (
    <section className="flex flex-col gap-16">
      <h1 className="relative text-5xl font-medium">Como te ayudamos?</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-5 relative">
        <div className="absolute top-0 left-0 w-[30%] h-[30%] md:h-full pink__gradient" />
        {service.map((i) => {
          return <ServiceTag key={i.id} {...i} />;
        })}
      </div>
    </section>
  );
}

export default Servicios;
