import React from 'react';
import "./AllProducts.css";

function Card(slide) {
  return (
      <div className="box">
        <img src={slide.image} alt={slide.title}/>
        <div className="hover-icons">
          <a href=""><ion-icon name="heart-outline"></ion-icon></a>
          <a href=""><ion-icon name="eye-outline"></ion-icon></a>
          <a href=""><ion-icon name="bag-outline"></ion-icon></a>
        </div>
        <div className="product-title">
          <h5>{slide.title}</h5>
          <p>{slide.price}</p>
        </div>
      </div>
  )
}

export default Card