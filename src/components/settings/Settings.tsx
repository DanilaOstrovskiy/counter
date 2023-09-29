import React, {ChangeEvent, FC} from 'react';
import {SuperButton} from "../superButton/SuperButton";
import s from "./Settings.module.css"
import counter from "./../counter/Counter.module.css"
import {TextType} from "../../App";
import {actionsCreators} from "../../store/counter-reducer";
import {useDispatch, useSelector} from "react-redux";
import {selectCounter} from "../../store/selectors";


type SettingsPropsType = {
    text: string
    setText: (text: TextType) => void
}

const Settings: FC<SettingsPropsType> = ({ text, setText}) => {

    let dispatch = useDispatch()
    const {startValue, maximumValue} = useSelector(selectCounter);

    (startValue === 0 && maximumValue > 0) || (maximumValue > 0 && maximumValue > startValue && startValue >= 0)
        ? setText(`enter value and press 'set'`)
        : setText('Incorrect value!')

    const setFunc = () => {
        console.log('set')
        dispatch(actionsCreators.SettingAC(startValue))
    }

    const disabledSetButton = () => {
        return !(maximumValue && startValue >= 0 && maximumValue > startValue && maximumValue !== startValue && maximumValue > 0 && startValue >= 0);
    }



    const onChangeMaxValue = (e: ChangeEvent<HTMLInputElement>) => {
        dispatch(actionsCreators.ChangeMaxValueWithStatus((Number(e.currentTarget.value)), true))
    }

    const onChangeStartValue = (e: ChangeEvent<HTMLInputElement>) => {
        dispatch(actionsCreators.ChangeStartValueWithStatus((Number(e.currentTarget.value)), true))
    }



    return (
        <div className={counter.counter}>
            <div className={s.settingsDisplay}>
                <div className={s.settingsTitle}>
                    <span>max value: </span>
                    <input
                        onFocus={() => {
                            dispatch(actionsCreators.ChangeActiveStatusMax(true))
                        }}
                        onChange={(e)=>onChangeMaxValue(e)}
                        type={"number"}
                        className={(text === 'Incorrect value!') ? `${s.inputDisplay} ${s.inputDisplayFire}` : `${s.inputDisplay} `}
                        value={maximumValue}
                    />
                </div>
                <div className={s.settingsTitle}>
                    <span>start value: </span>
                    <input
                        onFocus={() => {dispatch(actionsCreators.ChangeActiveStatusMin(true))}}
                        onChange={(e)=>onChangeStartValue(e)}
                        type={'number'}
                        className={(text === 'Incorrect value!') ? `${s.inputDisplay} ${s.inputDisplayFire}` : `${s.inputDisplay} `}
                        value={startValue}
                    />
                </div>
            </div>
            <div className={counter.counterButtons}>
                <SuperButton
                    disabledButton={disabledSetButton}
                    buttonFunc={setFunc} title={"set"}
                />
            </div>
        </div>
    );
};

export default Settings;