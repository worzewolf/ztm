import {compose, createStore, applyMiddleware} from "redux";
import {rootReducer} from './root-reducer'
import {persistStore, persistReducer} from "redux-persist";
import storage from 'redux-persist/lib/storage'
import {logger} from "redux-logger";

const loggerMiddleware = (store) => (next) => (action) => {
    if (!action.type) {
        return next(action)
    }

    next(action)
    console.log('actionType',action.type)
    console.log('actionPayload',action.payload)
}

const persistConfig = {
    key: 'root',
    storage,
    blacklist: ['user'],
}

const persistedReducer = persistReducer(persistConfig, rootReducer)

const middleWares = [loggerMiddleware]

const composedEnhancers = compose(applyMiddleware(...middleWares))

export const store = createStore(persistedReducer, undefined, composedEnhancers) // 2nd param is optional

export const persistor = persistStore(store)
