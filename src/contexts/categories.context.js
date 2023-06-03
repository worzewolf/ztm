import {createContext, useState, useEffect} from "react";
import {getCategoriesAndDocuments} from "../utils/firebase/firebase";
// import SHOP_DATA from '../shop-data.js'

export const CategoriesContext = createContext({
    categoriesMap: {},
})

export const CategoriesProvider = ({children}) => {
    const [categoriesMap, setCategoriesMap] = useState({})

    // do this only once to store data into a database from static json
    // useEffect(() => {
    //     addCollectionAndDocuments('categories', SHOP_DATA)
    // }, [])

    useEffect(() => {
        const getCategoriesMap = async () => {
            const categoryMap = await getCategoriesAndDocuments()

            setCategoriesMap(categoryMap)
        }

        getCategoriesMap()
    }, [])

    const value = {categoriesMap}

    return (
        <CategoriesContext.Provider value={value}>
            {children}
        </CategoriesContext.Provider>
    )
}
