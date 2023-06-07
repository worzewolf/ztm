// import './cart-dropdown.scss'
import {CartDropDownContainer, EmptyMessage, CartItems} from './cart-dropdown.styles'
import Button from "../button/button";
import CartItem from "../cart-item/cart-item";
import {useNavigate} from 'react-router-dom'
import {useSelector} from "react-redux";
import {selectCartItems} from "../../store/cart/cart.selector";

const CartDropDown = () => {
    const cartItems = useSelector(selectCartItems)

    const navigate = useNavigate()

    const goToCheckout = () => {
        navigate('/checkout')
    }

    return (
        <CartDropDownContainer>
            <CartItems>
                {cartItems.length
                    ? (cartItems.map(item =>
                        <CartItem item={item} key={item.id} />
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
