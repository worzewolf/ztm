import {Fragment} from "react";
import {useSelector} from "react-redux";
import Category from "../../components/category-preview/category-preview";
import Spinner from "../../components/spinner/spinner"
import {selectCategoriesMap, selectCategoriesIsLoading} from "../../store/categories/category.selector";

const CategoryPreview = () => {
    const categoriesMap = useSelector(selectCategoriesMap)
    const isLoading = useSelector(selectCategoriesIsLoading)

    return (
        <Fragment>
            { isLoading
                ? <Spinner />
                : (Object.keys(categoriesMap).map(title => {
                    const products = categoriesMap[title];

                    return <Category
                        key={title}
                        products={products}
                        title={title}
                    />
                }))
            }
        </Fragment>
    )
}

export default CategoryPreview
