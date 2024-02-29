import React from "react";
import { useState, useEffect } from "react";
import "../styles/Cart.css";

const Cart = ({ cart, updateCart }) => {
  const monsteraPrice = 8;
  const [isOpen, setIsOpen] = useState(false);

  const [total, setTotal] = useState(0);

  useEffect(() => {
    if (cart != null && cart.length > 0) {
      setTotal((prevTot) => {
        return (
          prevTot + cart[cart.length - 1].amount * cart[cart.length - 1].price
        );
      });
    } else {
      setTotal(0);
    }
  }, [cart]);

  return (
    <div className="body">
      {isOpen ? (
        <div className="lmj-cart">
          <div></div>
          <div className="btn btn-light" onClick={() => setIsOpen(false)}>
            Fermer
          </div>
          <br />
          <br />
          <br />
          <h2>Panier</h2>
          {cart.map((plant) => (
            <div>
              {plant.name} x {plant.amount}
            </div>
          ))}
          <div>Total : {total}</div>
          <br />
          <br />

          <div className="btn btn-light" onClick={() => updateCart([])}>
            Annuler saisie
          </div>
        </div>
      ) : (
        <div className="btn btn-light mt-3" onClick={() => setIsOpen(true)}>
          Ouvrir le Panier
        </div>
      )}
    </div>
  );
};

export default Cart;
