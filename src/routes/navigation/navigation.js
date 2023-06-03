import {Link, Outlet} from "react-router-dom";
import {Fragment, useContext} from "react";
import {UserContext} from "../../contexts/user.context";
import {CartContext} from "../../contexts/cart.context";
import {signOutUser} from '../../utils/firebase/firebase'
import {ReactComponent as CrwnLogo} from "../../assents/crown.svg";
import CartIcon from "../../components/cart-icon/cart-icon";
import CartDropDown from "../../components/cart-dropdown/cart-dropdown";
import {NavigationContainer, NavLinks, NavLink, LogoContainer} from './navigation.styles'
// import './navigation.scss'

const Navigation = () => {
    const {currentUser} = useContext(UserContext)
    const {isCartOpen} = useContext(CartContext)

    return (
        <Fragment>
            <NavigationContainer>
                <LogoContainer to='/'>
                    <CrwnLogo className='logo'/>
                </LogoContainer>
                <NavLinks>
                    <NavLink to='/shop'>SHOP</NavLink>
                    {currentUser ? (
                        <NavLink as={'span'} onClick={signOutUser}> SIGN OUT</NavLink>
                    ) : (
                        <NavLink to='/auth'>SIGN IN</NavLink>
                    )
                    }
                    <CartIcon/>
                </NavLinks>
                {isCartOpen &&
                    <CartDropDown/>
                }
            </NavigationContainer>
            <Outlet/>
        </Fragment>
    )
}

export default Navigation