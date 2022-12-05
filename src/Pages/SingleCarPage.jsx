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
      <h1 className="font-bold text-4xl flex justify-center py-10 px-5 text-sky-900">
        {result.marca}
        {result.modelo}
        {result.ano}
      </h1>
      <div className="grid grid-cols-2">
        <div>
          <img
            className="rounded-lg w-auto"
            src={result.imagens}
            alt="car image"
          />
        </div>
        <div>form test drive</div>
      </div>
      <div className="py-10 grid grind-cols-2">
        <div>
          <p>Model:{result.modelo}</p>
        </div>
        <div>
          <p>Engine:{result.combustivel}</p>
        </div>
        <div>
          <p>Horsepower:{result.potencia}</p>
        </div>
        <div>
          <p>First register:{result.anofabrico} </p>
        </div>
        <div>
          <p>Body Style:{result.tipodechassi}</p>
        </div>
        <div>
          <p>Mileage:{result.numerokm}</p>
        </div>
        <div>
          <p>Ext. Color:{result.corexterior}</p>
        </div>
        <div>
          <p>Transmission:{result.tranmissao}</p>
        </div>
        <div>
          <p>Doors:{result.portas}</p>
        </div>
        <div>
          <p>Seats:{result.capacidade}</p>
        </div>
        <div>
          <p>Sensors:{result.sensores}</p>
        </div>
        <div>
          <p>Lights:{result.tipofarois}</p>
        </div>
        <div>
          <p>Security:{result.seguranca}</p>
        </div>
      </div>
      <div className="py-10"></div>
    </MainLayout>
  );
}

export default SingleCarPage;
