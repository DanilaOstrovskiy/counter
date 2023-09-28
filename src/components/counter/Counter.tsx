import React, {useState} from 'react';
import {SuperButton} from "../superButton/SuperButton";
import s from "./Counter.module.css"



const Counter = () => {

    return (
        <div className={s.counter}>
            <div className={s.counterDisplay}>
                <h1>6</h1>
            </div>
            <div className={s.counterButtons}>
                <SuperButton value={"inc"}/>
                <SuperButton value={"reset"}/>
                <SuperButton value={"set"}/>
            </div>
        </div>
    );
};

export default Counter;