import React from "react";
import cars from "../data/cars.json";


function Brands() {
  return (
    <ul className="flex p-5 gap-5   justify-evenly">
        {cars.map((cars) => (
          <li className="justify-around"  key={cars.numerodechassi}>
            <img className="w-40" src={cars.imagemmarca} alt="" />
          </li>
        ))}
      </ul>
  );
}

export default Brands;
