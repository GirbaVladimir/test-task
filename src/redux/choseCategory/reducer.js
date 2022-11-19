import { createReducer } from "@reduxjs/toolkit";

import { ECategoryFilterCodes } from "src/constants/filterTypes";

import {
    getDirectionsSuccess,
    getFilterSuccess,
    setFromFilterCode,
    setFromSelectedOptionCode,
    setToFilterCode,
    setToSelectedOptionCode
} from "./actions";

export const initialState = {
    directions: [],
    filter: [],
    from: {
        filterCode: ECategoryFilterCodes.All,
        selectedOptionCode: ''
    },
    to: {
        filterCode: ECategoryFilterCodes.All,
        selectedOptionCode: ''
    }
};

export default createReducer(
    initialState,
    (builder) => {
        builder
            .addCase(getDirectionsSuccess, (state, action) => {
                state.directions = action.payload
            })
            .addCase(getFilterSuccess, (state, action) => {
                state.filter = action.payload
            })
            .addCase(setFromFilterCode, (state, action) => {
                state.from.filterCode = action.payload
            })
            .addCase(setFromSelectedOptionCode,(state, action) => {
                state.from.selectedOptionCode = action.payload
            })
            .addCase(setToFilterCode, (state, action) => {
                state.to.filterCode = action.payload
            })
            .addCase(setToSelectedOptionCode, (state, action) => {
                state.to.selectedOptionCode = action.payload
            })
    }
);
