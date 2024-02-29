import React from "react";
import { useState, useEffect } from "react";
import "../styles/Cart.css";

const Cart = ({ cart, updateCart }) => {
  const monsteraPrice = 8;
  const [isOpen, setIsOpen] = useState(false);

  const [total, setTotal] = useState(0);

  useEffect(() => {
    if (cart.length > 0) {
      let newTot = 0;
      cart.forEach((plant) => {
        newTot += plant.amount * plant.price;
      });
      setTotal(newTot);
    } else {
      setTotal(0);
    }
  }, [cart]);

  return (
    <div className="body" >
      {isOpen ? (
        <div className="lmj-cart" style={{ opacity: '1' }}>
          <div></div>
          <div className="btn btn-light closeButton" onClick={() => setIsOpen(false)}>
            Fermer
          </div>
          <br />
          <br />
          <br />
          <h2 className="panier" >Panier</h2>
          {cart.map((plant) => (
            <div style={{ opacity: '1' }}>
              {plant.name} x {plant.amount}
            </div>
          ))}
          <div className="total">Total : {total} euros</div>
          <br />
          <br />

          <div className="btn btn-light" onClick={() => updateCart([])} style={{ opacity: '1' }}>
            Annuler saisie
          </div>
        </div>
      ) : (
        <div className="btn btn-light mt-3" onClick={() => setIsOpen(true)} style={{ opacity: '1' }}>
          Ouvrir le Panier
        </div>
      )}
    </div>
  );
};

export default Cart;
