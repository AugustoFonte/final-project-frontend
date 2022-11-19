import React from "react";

import MainLayout from "../layouts/MainLayout";


function Homepage() {
  return (
    <MainLayout>
      <img src="/banner.jpg" alt="Banner" />

      <h2 className=" flex justify-center py-20 text-3xl font-bold">The Brands we work</h2>
      <h3 className=" flex justify-center py-20 text-3xl font-bold">Find a Car</h3>
      <h4 className=" flex justify-center py-20 text-3xl font-bold">About us</h4>^
      <h5 className=" flex justify-center py-20 text-3xl font-bold">Contact us</h5>
    </MainLayout>
  );
}

export default Homepage;
