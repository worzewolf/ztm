import './checkout.scss'
import CheckoutItem from "../../components/checkout-item/checkout-item";
import {useSelector} from "react-redux";
import {selectCartItems, selectCartTotal} from "../../store/cart/cart.selector";

const Checkout = () => {
    const cartItems = useSelector(selectCartItems)
    const cartTotal = useSelector(selectCartTotal)

    return (
        <div className={'checkout-container'}>
            <h1>Checkout</h1>
            <div className={'checkout-header'}>
                <div className={'header-block'}>
                    <span>Product</span>
                </div>
                <div className={'header-block'}>
                    <span>Description</span>
                </div>
                <div className={'header-block'}>
                    <span>Quantity</span>
                </div>
                <div className={'header-block'}>
                    <span>Price</span>
                </div>
                <div className={'header-block'}>
                    <span>Remove</span>
                </div>
            </div>
            <div>
                {cartItems.map(cartItem => {
                    return <CheckoutItem
                        key={cartItem.id}
                        cartItem={cartItem}
                    />
                })}
            </div>
            <span className={'total'}>Total: ${cartTotal}</span>
        </div>
    );
}

export default Checkout
