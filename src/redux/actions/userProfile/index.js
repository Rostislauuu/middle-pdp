import * as types from "../../types/userProfile";

export const getAnimalsRequest = (payload) => ({
    type: types.GET_ANIMAL_REQUEST,
    payload
});

export const increaseCount = () => ({
    type: types.INCREASE_COUNT
});

export const getDataRequest = (payload, callback) => ({
    type: types.GET_DATA_REQUEST,
    payload,
    callback
})
