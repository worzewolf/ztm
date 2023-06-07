import {createAction} from "../../utils/reducer/reducer";
import {CATEGORIES_ACTION_TYPES} from "./category.types";
import {getCategoriesAndDocuments} from "../../utils/firebase/firebase";

export const fetchCategoriesStart = () =>
    createAction(CATEGORIES_ACTION_TYPES.FETCH_CATEGORIES_START)

export const fetchCategoriesSuccess = (categoriesArray) =>
    createAction(
        CATEGORIES_ACTION_TYPES.FETCH_CATEGORIES_SUCCESS,
        categoriesArray
    )

export const fetchCategoriesFailure = (error) =>
    createAction(
        CATEGORIES_ACTION_TYPES.FETCH_CATEGORIES_FAILED,
        error
    )

export const fetchCategoriesAsync = () => async (dispatch) => {
    dispatch(fetchCategoriesStart())
    try {
        const categoryArray = await getCategoriesAndDocuments('categories')
        dispatch(fetchCategoriesSuccess(categoryArray))
    } catch (error) {
        console.log('error', error)
        dispatch(fetchCategoriesFailure(error))
    }
}
