import {Fragment, useContext} from "react";
import {CategoriesContext} from "../../contexts/categories.context";
import Category from "../../components/category-preview/category-preview";

import './categories-preview.scss'

const CategoryPreview = () => {
    const {categoriesMap} = useContext(CategoriesContext)

    return (
        <Fragment>
            {Object.keys(categoriesMap).map(title => {
                    const products = categoriesMap[title];

                    return <Category
                        key={title}
                        products={products}
                        title={title}
                    />
                })
            }
        </Fragment>
    )
}

export default CategoryPreview