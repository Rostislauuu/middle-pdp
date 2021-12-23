import * as types from "../../types/userProfile";

const initialState = {
    userName: "Rostislauuu",
    firstName: "Rostik",
    lastName: "Sheketa",
    animals: [],
    error: null,
    count: 0
}

const userProfileReducer = (state = initialState, action) => {
    switch(action.type) {
        case types.GET_ANIMAL_REQUEST_SUCCESS:
            return {
                ...state,
                animals: action.payload,
                error: null
            }
        case types.GET_ANIMAL_REQUEST_ERROR:
            return {
                ...state,
                error: action.payload
            }   
        case types.INCREASE_COUNT:
            return {
                ...state,
                count: state.count + 1
            }     
        default: return state;
    }
}

export default userProfileReducer;
