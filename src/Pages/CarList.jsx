import React from 'react';
import CarCard from '../components/CarCard';
import cars from "../data/cars.json";

// Layout
import MainLayout from '../layouts/MainLayout';

function CarList() {


  return (
    <MainLayout>
      <h1>Car List</h1>
      
      <ul>
        {cars.map((car) => (
          <li key={car.marca}>
            <CarCard marca={car.marca} imagens={car.imagens} numerodechassi={car.numerodechassi} />
          </li>
        ))}
      </ul>
    </MainLayout>
  );
}

export default CarList;