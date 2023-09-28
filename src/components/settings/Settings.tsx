import React from 'react';
import {SuperButton} from "../superButton/SuperButton";
import s from "./Settings.module.css"
import counter from "./../counter/Counter.module.css"

const Settings = () => {
    return (
        <div className={counter.counter}>
            <div className={s.settingsDisplay}>
                <div className={s.settingsTitle}>
                    <span>max value: </span>
                    <input type={"number"}/>
                </div>
                <div className={s.settingsTitle}>
                    <span>start value: </span>
                    <input type={'number'}/>
                </div>
            </div>
            <div className={counter.counterButtons}>
                <SuperButton value={"set"}/>
            </div>
        </div>
    );
};

export default Settings;