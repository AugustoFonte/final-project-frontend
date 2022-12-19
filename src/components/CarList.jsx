import React from "react";
import CarCard from "./CarCard";
import cars from "../data/cars.json";



function CarList() {
  return (
    <div className="flex justify-evenly">

      <ul className="flex p-5 gap-5">
        {cars.map((car) => (
          <li className="w-1/4" key={car.marca}>
            <CarCard
              marca={car.marca}
              imagens={car.imagens}
              numerodechassi={car.numerodechassi}
              preco={car.preco}
              modelo={car.modelo}
              ano={car.anofabrico}
            />
          </li>
        ))}
      </ul>
    </div>
  );
}

export default CarList;
