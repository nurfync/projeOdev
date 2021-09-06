const INITIAL_STATE = {
    user:null
}

export const userSelector=state=> state.userState.user

// Action Types

const SET_USER = "SET_USER";
const SET_USER_OUT ="SET_USER_OUT"


// Action Creators

export const setUserAC = (user) => {
    return {
        type: SET_USER,
        payload:{user},
    }
}
export const setUserOutAC = () => {
    return {
        type: SET_USER_OUT,
       
    }
}

// recuder

export const userReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case SET_USER:
            
            const newUser=action.payload.user
            return {
                user:newUser
            }
        case SET_USER_OUT:

            return {
                user: null
            }
        default:
            return state
    }
}