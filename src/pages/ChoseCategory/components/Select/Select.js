import React, { useState, startTransition } from 'react';
import classnames from "classnames";

import Options from "./components/Options";

import styles from './Select.scss';

const Select = ({
    className,
    options = [],
    selectedOptionCode,
    onChange,
}) => {
    const [isOptionsOpen, setIsOptionsOpen] = useState(false);

    const selectedOption = options.find(({ code }) => code === selectedOptionCode) || {};

    const openOptions = () => startTransition(() => setIsOptionsOpen(true));
    const closeOptions = () => setIsOptionsOpen(false);

    const onChangeHandler = (code) => {
        onChange(code);
        closeOptions();
    }

    const onContentKeyDownHandler = (e) => {
        switch (e.key) {
            case 'ArrowDown':
            case 'ArrowUp':
            case ' ':
                e.preventDefault();
                openOptions();
                break;
            default:
                break;
        }
    };

    return (
        <div className={classnames(styles.select, className)}>
            <button
                className={styles.select__control}
                onKeyDown={onContentKeyDownHandler}
                onClick={openOptions}
            >
                {selectedOption.name || 'Выберите направление'}

                <div
                    className={classnames(styles.select__controlArrow, {
                        [styles.select__controlArrow_rotated]: isOptionsOpen
                    })}
                />
            </button>

            {isOptionsOpen && (
                <Options
                    selectedValueCode={selectedOption.code}
                    options={options}
                    onClose={closeOptions}
                    onChange={onChangeHandler}
                />
            )}
        </div>
    );
};

export default Select;
