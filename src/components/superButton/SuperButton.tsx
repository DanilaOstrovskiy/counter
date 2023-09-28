import React from 'react';
import s from './SuperButton.module.css'


export const SuperButton = () => {
    const title = "кнопка"
    return (
            <button className={s.universalButton}>{title}</button>
    );
};

