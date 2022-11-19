import React from 'react';
import classnames from "classnames";

import styles from './CategoryFilter.scss';

const CategoryFilter = ({
    activeFilterCode = '',
    filtersList = [],
    onItemClick = () => {},
}) => {
    const onItemClickHandler = (code) => () => onItemClick(code);

    return (
        <div className={styles.categoryFilter}>
            {filtersList.map(({ code, text }) => (
                <button
                    key={code}
                    className={classnames(styles.categoryFilter__item, {
                        [styles.categoryFilter__item_active]: code === activeFilterCode
                    })}
                    onClick={onItemClickHandler(code)}
                >
                    {text}
                </button>
            ))}
        </div>
    )
};

export default CategoryFilter;
