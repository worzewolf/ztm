export const USER_ACTION_TYPES = {
    SET_CURRENT_USER: 'user/SET_CURRENT_USER'
}

const INITIAL_STATE = {
    currentUser: null
}

export const userReducer = (state = INITIAL_STATE, action) => {
    const {type, payload} = action

    switch(type) {
        case USER_ACTION_TYPES.SET_CURRENT_USER:
            return {
                ...state, // return all previous values that didn't change
                currentUser: payload // return updated value
            }
        default:
            return state
    }
}