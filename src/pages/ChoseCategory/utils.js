import { categoryFilterCodesValues, ECategoryFilterCodes } from "src/constants/filterTypes";

export const filterSelectOptions = (filterCode, directions) => {
    if (filterCode === ECategoryFilterCodes.All) {
        return directions;
    }

    return directions.filter(({ code }) => categoryFilterCodesValues[filterCode].find((value) => value === code));
};
