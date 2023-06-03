// import './cart-dropdown.scss'
import {CartDropDownContainer, EmptyMessage, CartItems} from './cart-dropdown.styles'
import Button from "../button/button";
import CartItem from "../cart-item/cart-item";
import {useContext} from "react";
import {CartContext} from "../../contexts/cart.context";
import {useNavigate} from 'react-router-dom'

const CartDropDown = () => {
    const {cartItems} = useContext(CartContext)

    const navigate = useNavigate()

    const goToCheckout = () => {
        navigate('/checkout')
    }

    return (
        <CartDropDownContainer>
            <CartItems>
                {cartItems.length
                    ? (cartItems.map(item =>
                        <CartItem item={item}/>
                    ))
                    : <EmptyMessage>Your cart is empty</EmptyMessage>
                }
            </CartItems>
            <Button
                onClick={goToCheckout}
            >
                CHECKOUT
            </Button>
        </CartDropDownContainer>
    )
}

export default CartDropDown