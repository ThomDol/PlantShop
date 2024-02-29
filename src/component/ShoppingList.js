import React, { useEffect } from "react";
import { plantList } from "../data/data";
import "../styles/ShoppingList.css";
import PlantItem from "./PlantItem";
import { useState } from "react";
import { useRef } from "react";

const ShoppingList = ({ cart, updateCart }) => {
  const categories = plantList.reduce(
    (acc, plant) =>
      acc.includes(plant.category) ? acc : acc.concat(plant.category),
    []
  );

  const [categorySelected, setCategorySelected] = useState("");

  const [plantListFiltered, setPlantListFiltered] = useState([]);

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

  useEffect(() => {
    if (categorySelected === "") {
      setPlantListFiltered(plantList);
    } else {
      setPlantListFiltered(
        plantList.filter((plant) => plant.category === categorySelected)
      );
    }
  }, [categorySelected]);

  return (
    <div>
      <div className="col-3 mx-auto filtre">
        Choisissez le type de plante :
        <div className="row">
          {categories.map((cat) => (
            <div
              className="btn btn-secondary m-2"
              onClick={() => setCategorySelected(cat)}
            >
              {cat}
            </div>
          ))}
          <div
            onClick={() => setCategorySelected("")}
            className="btn btn-warning m-2"
          >
            Annuler filtre
          </div>
        </div>
      </div>

      <div className="col-10 mt-5 listPlant">
        <div className="row justify-content-around">
          {plantListFiltered.map((plant) => (
            <div className="col-3 m-2">
              <PlantItem
                name={plant.name}
                cover={plant.cover}
                id={plant.id}
                water={plant.water}
                light={plant.light}
                category={plant.category}
                price={plant.price}
              />
              <br></br>
              <div
                className="btn btn-secondary mx-auto text-center"
                onClick={() => addToCart(plant.name, plant.price)}
              >
                Ajouter
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ShoppingList;
