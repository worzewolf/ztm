export const loggerMiddleware = (store) => (next) => (action) => {
    if (!action.type) {
        return next(action)
    }

    console.log('actionType ',action?.type)
    console.log('actionPayload ',action.payload)
    console.log('currentState: ',store.getState())

    next(action)

    console.log('nextState: ',store.getState())
}