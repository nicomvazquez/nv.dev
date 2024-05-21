import React from "react";

import { AiOutlineExport } from "react-icons/ai";

function ProyectCard({ img, title, link }) {
  return (
    <div className="w-full overflow-hidden">
      <img src={img} alt="" className="rounded-xl" />
      <h1 className="text-3xl pt-5 pb-3">{title}</h1>
      <a href={link}>
        <button className="bg-gradient flex items-center gap-2 text-xl py-2 px-5 rounded-full">
          visit <AiOutlineExport />
        </button>
      </a>
    </div>
  );
}

export default ProyectCard;
