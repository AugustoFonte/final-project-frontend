import React from "react";
import { useParams } from "react-router-dom";
import CarsData from "../data/cars.json";

import MainLayout from "../layouts/MainLayout";

function SingleCarPage() {
  const params = useParams();
  const numerodechassiSlug = params.numerodechassi;
  const result = CarsData.find(({ slug }) => slug === numerodechassiSlug);
  console.log (params)

  return (
    <MainLayout>
      <h1 className="font-bold text-4xl flex py-10 px-5 text-sky-900">
        {result.marca}
        {result.modelo}
        {result.ano}
      </h1>
      <div className="grid grid-cols-2">
        <div>
          <img
            className="rounded-lg p-5 w-auto"
            src={result.imagens}
            alt="car image"
          />
        </div>
        <div>form test drive</div>
      </div>
      <div className="py-10 grid grind-cols-2 text-lg">
        <div>
        <p className="font-bold px-5 text-sky-800"> Model: <span className="text-black font-normal">{result.modelo}</span></p>
        </div>
        <div>
        <p className="font-bold px-5 text-sky-800">Engine: <span className="text-black font-normal">{result.combustivel}</span></p>
        </div>
        <div>
          <p className="font-bold px-5 text-sky-800">Horsepower: <span className="text-black font-normal">{result.potencia}</span></p>
        </div>
        <div>
          <p className="font-bold px-5 text-sky-800">First register: <span className="text-black font-normal">{result.anofabrico} </span></p>
        </div>
        <div>
          <p className="font-bold px-5 text-sky-800">Body Style: <span className="text-black font-normal">{result.tipodechassi}</span></p>
        </div>
        <div>
          <p className="font-bold px-5 text-sky-800">Mileage: <span className="text-black font-normal">{result.numerokm}</span></p>
        </div>
        <div>
          <p className="font-bold px-5 text-sky-800">Ext. Color: <span className="text-black font-normal">{result.corexterior}</span></p>
        </div>
        <div>
          <p className="font-bold px-5 text-sky-800">Transmission: <span className="text-black font-normal">{result.tranmissao}</span></p>
        </div>
        <div>
          <p className="font-bold px-5 text-sky-800">Doors: <span className="text-black font-normal">{result.portas}</span></p>
        </div>
        <div>
          <p className="font-bold px-5 text-sky-800">Seats: <span className="text-black font-normal">{result.capacidade}</span></p>
        </div>
        <div>
          <p className="font-bold px-5 text-sky-800">Sensors: <span className="text-black font-normal">{result.sensores}</span></p>
        </div>
        <div>
          <p className="font-bold px-5 text-sky-800">Lights: <span className="text-black font-normal">{result.tipofarois}</span></p>
        </div>
        
      </div>
      <div className="py-10"></div>
    </MainLayout>
  );
}

export default SingleCarPage;
