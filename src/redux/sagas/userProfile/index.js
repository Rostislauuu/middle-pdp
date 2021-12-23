import { all, call, put, takeLatest } from "redux-saga/effects";

import * as types from "../../types/userProfile";


export function mockApiCall(id) {
    console.log("Lets imagine this is api call", id)
 
    return id;
}

export function* increaseCount() {
    yield put({ type: types.INCREASE_COUNT_SUCCESS });
};

export function* decreaseCount() {
    yield put({ type: types.DECREASE_COUNT_SUCCESS });
}

export function* getDataFromApi() {
    const data = yield call(mockApiCall, 1);

    yield put({ type: types.GET_DATA_REQUEST_SUCCESS, payload: data });
}

export function* fetchData(action) {
    try {
        const animals = [];
        for (let i = 0; i < action.payload.loopCount; i++) {
            const animal = yield call(mockApiCall, action.payload.animalId[i]);
            animals.push(animal);
        }
        yield put({ type: types.GET_ANIMAL_REQUEST_SUCCESS, payload: animals });

        if(action.callback) {
            yield call(action.callback);
        }
    } catch (error) {
        yield put({ type: types.GET_ANIMAL_REQUEST_ERROR, payload: error })
    }
}

export default function* generalSagas() {
    yield all([
        yield takeLatest(types.INCREASE_COUNT, increaseCount),
        yield takeLatest(types.DECREASE_COUNT, decreaseCount),
        yield takeLatest(types.GET_ANIMAL_REQUEST, fetchData)
    ])
}
