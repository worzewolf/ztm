import {useEffect} from "react";
import {Routes, Route} from "react-router-dom";
import Category from "../category/category";
import CategoryPreview from "../categories-preview/categories-preview";
import {getCategoriesAndDocuments} from "../../utils/firebase/firebase";
import {setCategories} from "../../store/categories/category.action";
import {useDispatch} from "react-redux";

const Shop = () => {
    const dispatch = useDispatch();
    useEffect(() => {
        const getCategoriesMap = async () => {
            const categoryArray = await getCategoriesAndDocuments()
            dispatch(setCategories(categoryArray))
        }

        getCategoriesMap()
    }, [])

    return (
        <Routes>
            <Route index element={<CategoryPreview />} />
            <Route path=":category" element={<Category />} />
        </Routes>
    )
}

export default Shop
