import React from "react";

import MainLayout from "../layouts/MainLayout";
import Contact from "../components/Contact";

function Homepage() {
  return (
    <MainLayout>
      <div class="relative">
        <img src="./banner.jpg" className="object-scale-down" alt="Banner" />
        <h1 class="absolute text-6xl text-sky-000 font-bold  text-white top-1/2 left-1/2 -translate-x-1/2 -translate-y-3/4 text-center ">
        The best opportunities are here for you
        </h1>
        
        
      </div>

      <h2 className=" flex justify-center py-20 text-4xl font-bold text-sky-900">
        The Brands we work
      </h2>
      <h3 className=" flex justify-center py-20 text-4xl font-bold text-sky-900">
        Find a Car
      </h3>
      
      <h4 className=" flex justify-center py-20 text-4xl font-bold text-sky-900">
        Contact us
      </h4>
      <Contact />
    </MainLayout>
  );
}

export default Homepage;
