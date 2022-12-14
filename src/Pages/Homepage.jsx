import React from "react";

import MainLayout from "../layouts/MainLayout";
import Contact from "../components/Contact";
import CarList from "../components/CarList";
import Brands from "../components/Brands";

function Homepage() {
  return (
    <MainLayout>
      <div class="relative">
        <img src="./banner.jpg" className="object-scale-down" alt="Banner" />
        <h1 class="absolute text-2xl  md:text-6xl text-sky-000 font-bold  text-white top-1/2 left-1/2 -translate-x-1/2 -translate-y-3/4 text-center ">
          The best opportunities are here for you
        </h1>
      </div>

      <h2 className=" flex justify-center py-20 text-4xl font-bold text-sky-900">
        The Brands we work
      </h2>
      <div>
        <Brands />
      </div>
      <h3 className=" flex justify-center py-20 text-4xl font-bold text-sky-900">
        Our last entries
      </h3>
      <div className=" flex justify-center">
      <CarList/>
      </div>
      <h4 className=" flex justify-center py-20 text-4xl font-bold text-sky-900">
        Contact us
      </h4>
      <div className=""><Contact /></div>
      <div className="py-10"></div>
     
    </MainLayout>
  );
}

export default Homepage;