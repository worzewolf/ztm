// import './cart-icon.scss'
import {CartContainer, ShoppingCartIcon, Counter} from './cart-icon.styles'
import {useContext} from "react";
import {CartContext} from "../../contexts/cart.context";

const CartIcon = () => {
    const {isCartOpen, setIsCartOpen, cartCount} = useContext(CartContext);

    const toggleIsCartOpen = () => setIsCartOpen(!isCartOpen)

    return (
        <CartContainer onClick={toggleIsCartOpen}>
            <ShoppingCartIcon />
            <Counter>{cartCount}</Counter>
        </CartContainer>
    )

}

export default CartIcon