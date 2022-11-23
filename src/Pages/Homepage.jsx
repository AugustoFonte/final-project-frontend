import React from "react";

import MainLayout from "../layouts/MainLayout";
import Contact from "../components/Contact";

function Homepage() {
  return (
    <MainLayout>
      <div class="relative">
        <img src="./banner.jpg" className="object-scale-down" alt="Banner" />
        <h1 class="absolute text-5xl font-bold  text-white top-1/2 left-1/2 -translate-x-1/2 -translate-y-3/4">
          Stand Carrocinha
        </h1>
        <h2 class="absolute text-4xl text-white top-1/2 left-1/2 -translate-x-1/2 -translate-y-4/4">
          The best opportunities are here for you
        </h2>
        
      </div>

      <h2 className=" flex justify-center py-20 text-3xl font-bold">
        The Brands we work
      </h2>
      <h3 className=" flex justify-center py-20 text-3xl font-bold">
        Find a Car
      </h3>
      <h4 className=" flex justify-center py-20 text-3xl font-bold">
        About us
      </h4>
      <h5 className=" flex justify-center py-20 text-3xl font-bold">
        Contact us
      </h5>
      <Contact className=" flex justify-center" />
    </MainLayout>
  );
}

export default Homepage;
