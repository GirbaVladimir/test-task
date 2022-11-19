import React, { useEffect, useRef } from "react";
import classnames from "classnames";

import styles from './Options.scss';

const Options = ({
    selectedValueCode,
    options,
    onClose,
    onChange,
}) => {
    const optionsListRef = useRef(null);

    const onCloseOptionsList = (e) => {
        if (optionsListRef && optionsListRef.current && !optionsListRef.current.contains(e.target)) {
            onClose();
        }
    };

    const onOptionClickHandler = (code) => () => onChange(code);

    useEffect(() => {
        document.addEventListener('click', onCloseOptionsList);

        return () => {
            document.removeEventListener('click', onCloseOptionsList);
        };
    }, [onCloseOptionsList])

    return (
        <div
            ref={optionsListRef}
            className={styles.options}
        >
            {options.length > 0 ?options.map(({ code, name }) => (
                <button
                    key={code}
                    className={classnames(styles.options__item, {
                        [styles.options__item_active]: selectedValueCode === code
                    })}
                    onClick={onOptionClickHandler(code)}
                >
                    {name}
                </button>
            )) : (
                <div className={classnames(styles.options__item, styles.options__item_empty)}>
                    Нет доступных направлений
                </div>
            )}
        </div>
    )
}

export default Options;
