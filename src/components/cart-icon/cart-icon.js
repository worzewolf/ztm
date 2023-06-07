// import './cart-icon.scss'
import {CartContainer, ShoppingCartIcon, Counter} from './cart-icon.styles'
import {useDispatch, useSelector} from "react-redux";
import {selectCartCount,selectCartIsOpen} from '../../store/cart/cart.selector'
import {setIsCartOpen} from '../../store/cart/cart.action'

const CartIcon = () => {
    const dispatch = useDispatch()

    const cartCount = useSelector(selectCartCount)
    const isCartOpen = useSelector(selectCartIsOpen)

    const toggleIsCartOpen = () => dispatch(setIsCartOpen(!isCartOpen))

    return (
        <CartContainer onClick={toggleIsCartOpen}>
            <ShoppingCartIcon />
            <Counter>{cartCount}</Counter>
        </CartContainer>
    )

}

export default CartIcon
