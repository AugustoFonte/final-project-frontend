import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

function CarCard(props) {
  return (
    <Link to={`/carlist/${props.numerodechassi}`}>
      <div class="w-full max-w-sm bg-white rounded-lg shadow-md dark:bg-gray-800 dark:border-gray-700">
        <img
          class="p-8 rounded-t-lg"
          src={props.imagens}
          alt="`image of ${props.marca}`"
        />

        <div className="px-5 pb-5">
          <h5 className="text-xl font-semibold tracking-tight text-gray-900 dark:text-white">
            {props.marca} {props.modelo} {props.ano}
          </h5>

          <div className="flex items-center justify-between">
            <span className="text-3xl font-bold text-gray-900 dark:text-white">
              {props.preco}€
            </span>
            <Link
              to={`/carlist/${props.numerodechassi}`}
              className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            >
              See more
            </Link>
          </div>
        </div>
      </div>
      
    </Link>
  );
}
CarCard.propTypes = {
  marca: PropTypes.string.isRequired,
  imagens: PropTypes.string.isRequired,
  numerodechassi: PropTypes.string.isRequired,
  preco: PropTypes.string.isRequired,
  modelo: PropTypes.string.isRequired,
  ano: PropTypes.string.isRequired,
};
export default CarCard;
