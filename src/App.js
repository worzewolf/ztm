import {useEffect} from "react";
import {useDispatch} from "react-redux";
import {Route, Routes} from "react-router-dom";

import {
    createUserDocumentFromAuth,
    onAuthStateChangedListener
} from "./utils/firebase/firebase";
import {setCurrentUser} from "./store/user/user.action";

import Home from "./routes/home/home";
import Navigation from './routes/navigation/navigation'
import Authentication from "./routes/sign-in/authentication";
import Shop from "./routes/shop/shop";
import Checkout from "./routes/checkout/checkout";

const App = () => {
    const dispatch = useDispatch();

    useEffect(() => {
        const unsubscribe = onAuthStateChangedListener((user) => {
            if (user) {
                createUserDocumentFromAuth(user)
            }
            dispatch(setCurrentUser(user))
        })

        return unsubscribe
    }, []);

    return (
        <Routes>
            <Route path='/' element={<Navigation/>}>
                <Route index element={<Home/>}/>
                <Route path='checkout' element={<Checkout/>}/>
                <Route path='shop/*' element={<Shop/>}/>
                <Route path='auth' element={<Authentication/>}/>
            </Route>
        </Routes>
    )
}

export default App;
