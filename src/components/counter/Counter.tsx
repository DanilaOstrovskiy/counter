import React, {FC} from 'react';
import {SuperButton} from "../superButton/SuperButton";
import s from "./Counter.module.css"
import {TextType} from "../../App";
import {useDispatch, useSelector} from "react-redux";
import {selectCounter} from "../../store/selectors";
import {actionsCreators} from "../../store/counter-reducer";


type CounterPropsType = {
    text: string,
    setText: (text: TextType) => void
}

const Counter: FC<CounterPropsType> = ({text}) => {
    let dispatch = useDispatch()
    const {value, activeMinValue, activeMaxValue, startValue, maximumValue} = useSelector(selectCounter)

    const incFunc = () => {
        (value >= startValue && value <= maximumValue) &&
        dispatch(actionsCreators.IncrementAC(value))
    }
    const resFunc = () => {
        dispatch(actionsCreators.ResetAC())
    }

    const disabledIncButton = (value: number) => {
        return !(value >= 0 && value < maximumValue && value >= startValue && (!activeMaxValue && !activeMinValue));
    }
    const disabledResButton = (value: number) => {
        return value <= 0;
    }

    return (
        <div className={s.counter}>
            <div className={s.counterDisplay}>
                {startValue < 0 || maximumValue < 0 || activeMaxValue || activeMinValue
                    ? <div className={(text === 'Incorrect value!') ? s.errorText : s.text}>{text}</div>
                    : <div className={(value === maximumValue) ? s.maxInc : s.value}>{value}</div>
                }
            </div>
            <div className={s.counterButtons}>
                <SuperButton title={"inc"} buttonFunc={incFunc} disabledButton={disabledIncButton}/>
                <SuperButton title={"reset"} buttonFunc={resFunc} disabledButton={disabledResButton}/>
            </div>
        </div>
    );
};

export default Counter;