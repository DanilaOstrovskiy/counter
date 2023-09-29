import React, {FC} from 'react';
import s from './SuperButton.module.css'
import {useSelector} from "react-redux";
import {selectCounter} from "../../store/selectors";


type SuperButtonPropsType = {
    title: string;
    buttonFunc: () => void
    disabledButton: (value: number) => boolean
}

export const SuperButton: FC<SuperButtonPropsType> = ({title, buttonFunc, disabledButton}) => {
    const {value} = useSelector(selectCounter);
    return (
        <button className={s.universalButton} onClick={buttonFunc} disabled={disabledButton(value)}>{title}</button>
    );
};

