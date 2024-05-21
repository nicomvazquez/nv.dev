import React from "react";

import { Navbar } from "./components";

import { Hero, Servicios, Proyects, Contact, Futher } from "./pages";

function App() {
  return (
    <div className="bg-black w-full overflow-hidden text-white">
      <div className="flex justify-center items-center px-6 py-4">
        <div className="xl:max-w-[1280px] w-full">
          <Navbar />
        </div>
      </div>

      <div className="flex justify-center items-center px-6 py-28">
        <div className="xl:max-w-[1280px] w-full">
          <Hero />
        </div>
      </div>

      <div className="flex justify-center items-center px-6 py-28">
        <div className="xl:max-w-[1280px] w-full">
          <Servicios />
        </div>
      </div>

      <div className="flex justify-center items-center px-6 py-28">
        <div className="xl:max-w-[1280px] w-full">
          <Proyects />
        </div>
      </div>

      <div className="flex justify-center items-center px-6 py-20">
        <div className="xl:max-w-[1280px] w-full">
          <Contact />
        </div>
      </div>

      <div className="flex justify-center items-center px-6 py-4">
        <div className="xl:max-w-[1280px] w-full">
          <Futher />
        </div>
      </div>
    </div>
  );
}

export default App;
