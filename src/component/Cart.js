import React from 'react';
import { useState } from 'react';
import '../styles/Cart.css'

const Cart = ({ cart, updateCart }) => {
    const monsteraPrice = 8
    const [isOpen, setIsOpen] = useState(false)



    return (
        <div className='body'>
            {isOpen ? (
                <div className='lmj-cart'>
                    <div></div>
                    <div className='btn btn-light' onClick={() => setIsOpen(false)}>Fermer</div>
                    <br /><br /><br />
                    <h2>Panier</h2>
                    <div>Monstera : {monsteraPrice}€</div>
                    <br />
                    <div>
                        Total: {monsteraPrice * cart}€
                    </div>
                    <br /><br />

                    <div className="btn btn-light" onClick={() => updateCart(0)}>Annuler saisie</div>
                </div >

            ) :
                (
                    <div className='btn btn-light mt-3' onClick={() => setIsOpen(true)}>Ouvrir le Panier</div>

                )

            }
        </div>
    )
}

export default Cart