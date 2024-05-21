import React from "react";

import { ProyectCard } from "../components";

import { proyects } from "../constants";

function Proyects() {
  return (
    <section className="grid grid-cols-1 md:grid-cols-2 gap-10">
      <div>
        <h1 className="text-6xl font-medium text-gradient">Mira nuestros <br /> ultimos <br /> proeyctos</h1>
      </div>
      {proyects.map((i) => {
        return <ProyectCard key={i.id} {...i} />;
      })}
    </section>
  );
}

export default Proyects;
