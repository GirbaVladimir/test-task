import { createAction } from "@reduxjs/toolkit";

export const getDirectionsRequest = createAction("GET_DIRECTIONS_REQUEST");
export const getDirectionsSuccess = createAction("GET_DIRECTIONS_SUCCESS");

export const getFilterRequest = createAction("GET_FILTER_REQUEST");
export const getFilterSuccess = createAction("GET_FILTER_SUCCESS");

export const setFromFilterCode = createAction("SET_FROM_FILTER_CODE");
export const setFromSelectedOptionCode = createAction("SET_FROM_SELECTED_OPTION_CODE");

export const setToFilterCode = createAction("SET_TO_FILTER_CODE");
export const setToSelectedOptionCode = createAction("SET_TO_SELECTED_OPTION_CODE");
