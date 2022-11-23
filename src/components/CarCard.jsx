import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

function CarCard(props) {
  return (
    <Link to={`/carlist/${props.numerodechassi}`}>
      <div >
        <img src={props.imagens} alt={`image of ${props.marca}`} />
        <h2>{props.marca}</h2>
      </div>
    </Link>
  );
}
CarCard.propTypes = {
  marca: PropTypes.string.isRequired,
  imagens: PropTypes.string.isRequired,
  numerodechassi: PropTypes.string.isRequired,
};
export default CarCard;