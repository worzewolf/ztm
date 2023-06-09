import './checkout-item.scss'
import {useContext} from "react";
import {CartContext} from "../../contexts/cart.context";

const CheckoutItem = ({cartItem}) => {
    const {price, name, quantity, imageUrl} = cartItem

    const {clearItemFromCart,addItemToCart, removeItemFromCart} = useContext(CartContext)

    const addItemHandler = () => addItemToCart(cartItem)
    const removeItemHandler = () => removeItemFromCart(cartItem)
    const clearItemHandler = () => clearItemFromCart(cartItem)

    return (
        <div className={'checkout-item-container'}>
            <div className={'image-container'}>
                <img src={imageUrl} alt={name} />
            </div>
            <span className={'name'}>{name}</span>
            <div className={'quantity'}>
                <div className={'arrow'} onClick={removeItemHandler}>
                    &#10094;
                </div>
                <span className={'value'}>{quantity}</span>
                <div className={'arrow'} onClick={addItemHandler}>
                    &#10095;
                </div>
            </div>
            <span className={'price'}>${price}</span>
            <div onClick={clearItemHandler} className={'remove-button'}>&#10005;</div>
        </div>
    )
}

export default CheckoutItem