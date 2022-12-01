import React from 'react';
import Carlist from "../components/CarList"

// Layout
import MainLayout from '../layouts/MainLayout';

function CarList() {


  return (
    <MainLayout>
        <h1 className="font-bold text-4xl flex justify-center py-10 px-5 text-sky-900">
        Ours Cars
      </h1>
      <Carlist/>
    </MainLayout>
  )
}

export default CarList;