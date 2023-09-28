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
                <SuperButton/>
                <SuperButton/>
                <SuperButton/>
            </div>
        </div>
    );
};

export default Counter;