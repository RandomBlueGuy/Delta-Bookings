import React from 'react'
import './StarRating.css'

function StarRating() {
  return (
    <form>
      <p className="StarRating-clasificacion">
        <input id="StarRating-radio1" type="radio" name="estrellas" value="5" />
        <label htmlFor="radio1">★</label>
        <input id="StarRating-radio2" type="radio" name="estrellas" value="4" />
        <label htmlFor="radio2">★</label>
        <input id="StarRating-radio3" type="radio" name="estrellas" value="3" />
        <label htmlfor="radio3">★</label>
        <input id="StarRating-radio4" type="radio" name="estrellas" value="2" />
        <label htmlFor="StarRating-radio4">★</label>
        <input id="radio5" type="radio" name="estrellas" value="1" />
        <label htmlFor="radio5">★</label>
      </p>
    </form>
  );
}

export default StarRating