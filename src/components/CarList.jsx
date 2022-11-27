import React from "react";
import CarCard from "./CarCard";
import cars from "../data/cars.json";

// Layout
import MainLayout from "../layouts/MainLayout";

function CarList() {
  return (
    <div>

      <ul className="flex p-5 gap-5 content-evenly">
        {cars.map((car) => (
          <li className="w-1/4" key={car.marca}>
            <CarCard
              marca={car.marca}
              imagens={car.imagens}
              numerodechassi={car.numerodechassi}
            />
          </li>
        ))}
      </ul>
    </div>
  );
}

export default CarList;
