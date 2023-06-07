import {useEffect} from "react";
import {Routes, Route} from "react-router-dom";
import {useDispatch} from "react-redux";
import Category from "../category/category";
import CategoryPreview from "../categories-preview/categories-preview";
import {fetchCategoriesAsync} from "../../store/categories/category.action";

const Shop = () => {
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(fetchCategoriesAsync())
    }, [])

    return (
        <Routes>
            <Route index element={<CategoryPreview />} />
            <Route path=":category" element={<Category />} />
        </Routes>
    )
}

export default Shop
