import {Routes, Route} from "react-router-dom";
import CategoryPreview from "../categories-preview/categories-preview";
import Category from "../category/category";

const Shop = () => {

    return (
        <Routes>
            <Route index element={<CategoryPreview />} />
            <Route path=":category" element={<Category />} />
        </Routes>
    )
}

export default Shop