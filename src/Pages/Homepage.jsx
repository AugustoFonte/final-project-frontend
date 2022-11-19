import React from "react";

import MainLayout from "../layouts/MainLayout";


function Homepage() {
  return (
    <MainLayout>
      <img src="/banner.jpg" alt="" />

      <h1 className="text-3xl font-bold">Hello world!</h1>
    </MainLayout>
  );
}

export default Homepage;
