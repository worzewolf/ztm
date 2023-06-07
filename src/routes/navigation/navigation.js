import {Outlet} from "react-router-dom";
import {Fragment} from "react";
import {useSelector} from 'react-redux';
import {selectCartIsOpen} from "../../store/cart/cart.selector";
import {selectCurrentUser} from "../../store/user/user.selector";
import {signOutUser} from '../../utils/firebase/firebase'
import CartIcon from "../../components/cart-icon/cart-icon";
import CartDropDown from "../../components/cart-dropdown/cart-dropdown";
import {NavigationContainer, NavLinks, NavLink, LogoContainer} from './navigation.styles'
import {ReactComponent as CrwnLogo} from "../../assents/crown.svg";
// import './navigation.scss'

const Navigation = () => {
    const currentUser = useSelector(selectCurrentUser)
    const isCartOpen = useSelector(selectCartIsOpen)

    console.log('isCartOpen',isCartOpen)

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
