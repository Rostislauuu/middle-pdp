import { all } from "redux-saga/effects";

import userProfileSaga from "./sagas/userProfile"

export default function* rootSaga() {
    yield all([
        userProfileSaga()
    ]);
};
