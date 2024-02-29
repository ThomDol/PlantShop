import React from "react";
import CareScale from "./CareScale";

const PlantItem = ({ name, cover, price, category, id, water, light, cart, updateCart }) => {

  const addToCart = (name, price) => {
    const currentPlantSaved = cart.find((plant) => plant.name === name);
    if (currentPlantSaved) {
      const filteredPlantSaved = cart.filter((plant) => plant.name != name);
      updateCart([
        ...filteredPlantSaved,
        { name, price, amount: currentPlantSaved.amount + 1 },
      ]);
    } else {
      updateCart([...cart, { name, price, amount: 1 }]);
    }
  };


  return (
    <div key={id} className="card product" style={{ width: "18rem" }}>
      <img
        src={`${cover}`}
        className="card-img-top"
        alt={`${name} cover`}
        style={{ height: "350px" }}
      />
      <div class="card-body">
        <h5 class="card-title">{name}</h5>
        <p>{price} euros</p>
        <p>
          <span
            className="bg-warning border rounded "
            style={{ width: "auto", height: "auto", fontSize: "10px" }}
          >
            {category}
          </span>
        </p>
        <p className="card-text">
          <CareScale scaleValue={water} careType="water" />
        </p>
        <p className="card-text">
          <CareScale scaleValue={light} careType="light" />
        </p>
        <div
          className="btn btn-secondary mx-auto"
          onClick={() => addToCart(name, price)}
        >
          Ajouter
        </div>
      </div>
    </div>
  );
};

export default PlantItem;
