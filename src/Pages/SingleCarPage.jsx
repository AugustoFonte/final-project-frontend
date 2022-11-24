import React from 'react';
import { useParams } from 'react-router-dom';
import CarsData from "../data/cars.json";

import MainLayout from '../layouts/MainLayout';

function SingleCarPage() {
  const params = useParams();
  const numerodechassi = params.numerodechassi;
  const result = CarsData.find(({ slug }) => slug === numerodechassi);

  return (
    <MainLayout>
      <h1>
        {result.marca}
      </h1>
      <img src={result.imagens} alt={result.marca} />
      
    </MainLayout>
  );
}

export default SingleCarPage;