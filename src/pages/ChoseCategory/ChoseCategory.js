import React, { useEffect, useMemo } from "react";
import { useDispatch, useSelector } from "react-redux";

import CategoryFilter from "./components/CategoryFilter";
import Select from "./components/Select";

import { filterSelectOptions } from "./utils";

import {
    getDirectionsRequest,
    getFilterRequest,
    setFromFilterCode,
    setFromSelectedOptionCode,
    setToFilterCode,
    setToSelectedOptionCode
} from "src/redux/choseCategory/actions";

import { ECategoryFilterCodes } from "src/constants/filterTypes";
import { categoryFilterItems } from "./constants";

import styles from './ChoseCategory.scss';

const ChoseCategory = () => {
    const dispatch = useDispatch();

    const {
        directions,
        filter,
        from,
        to
    } = useSelector((state) => state.choseCategory);

    const fromSelectOptions = useMemo(() => filterSelectOptions(from.filterCode, directions), [directions, from.filterCode]);

    const toSelectOptions = useMemo(() => {
        const directions = filter.find((item) => item.from.code === from.selectedOptionCode)?.to || [];

        return filterSelectOptions(to.filterCode, directions);
    }, [filter, from.selectedOptionCode, to.filterCode])

    const onFromCategoryFilterItemClick = (code) => {
        dispatch(setFromFilterCode(code));
        dispatch(setFromSelectedOptionCode(""));
        dispatch(setToFilterCode(ECategoryFilterCodes.All));
        dispatch(setToSelectedOptionCode(""));
    }

    const onFromCategorySelectChange = (code) => {
        dispatch(setFromSelectedOptionCode(code));
        dispatch(setToFilterCode(ECategoryFilterCodes.All));
        dispatch(setToSelectedOptionCode(""));
    }

    const onToCategoryFilterItemClick = (code) => {
        dispatch(setToFilterCode(code));
        dispatch(setToSelectedOptionCode(""));
    }

    const onToCategorySelectChange = (code) => {
        dispatch(setToSelectedOptionCode(code));
    }

    useEffect(() => {
        dispatch(getDirectionsRequest());
        dispatch(getFilterRequest());
    }, [])

    return (
        <div className={styles.choseCategory}>
            <div className={styles.choseCategory__block}>
                <p className={styles.choseCategory__blockTitle}>
                    Отдаёте
                </p>

                <CategoryFilter
                    filtersList={categoryFilterItems}
                    activeFilterCode={from.filterCode}
                    onItemClick={onFromCategoryFilterItemClick}
                />

                <Select
                    className={styles.choseCategory__blockSelect}
                    options={fromSelectOptions}
                    selectedOptionCode={from.selectedOptionCode}
                    onChange={onFromCategorySelectChange}
                />
            </div>

            <div className={styles.choseCategory__block}>
                <p className={styles.choseCategory__blockTitle}>
                    Получаете
                </p>

                <CategoryFilter
                    filtersList={categoryFilterItems}
                    activeFilterCode={to.filterCode}
                    onItemClick={onToCategoryFilterItemClick}
                />

                <Select
                    className={styles.choseCategory__blockSelect}
                    options={toSelectOptions}
                    selectedOptionCode={to.selectedOptionCode}
                    onChange={onToCategorySelectChange}
                />
            </div>
        </div>
    );
};

export default ChoseCategory;
