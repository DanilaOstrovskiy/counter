import React, {FC} from 'react';
import s from './SuperButton.module.css'


type SuperButtonPropsType = {
    value: string
}

export const SuperButton: FC<SuperButtonPropsType> = ({value}) => {
    return (
            <button className={s.universalButton}>{value}</button>
    );
};

