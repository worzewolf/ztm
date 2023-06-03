import Home from "./routes/home/home";
import {Route, Routes} from "react-router-dom";
import Navigation from './routes/navigation/navigation'
import Authentication from "./routes/sign-in/authentication";
import Shop from "./routes/shop/shop";
import Checkout from "./routes/checkout/checkout";

const App = () => {
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
