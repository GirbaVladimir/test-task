import { takeEvery, put } from "redux-saga/effects";

import mockDirections from 'src/mocks/mock.directions.json';
import mockFilter from 'src/mocks/mock.filter.json';

import { getDirectionsRequest, getDirectionsSuccess, getFilterRequest, getFilterSuccess } from "./actions";

function* getDirectionsData() {
    yield put(getDirectionsSuccess(mockDirections));
}

function* getFilterData() {
    yield put(getFilterSuccess(mockFilter));
}

export default function* rootSaga() {
    yield takeEvery(getDirectionsRequest, getDirectionsData);
    yield takeEvery(getFilterRequest, getFilterData);
};
