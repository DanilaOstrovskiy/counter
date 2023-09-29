import React, {useEffect, useState} from 'react';
import './App.css';
import Counter from "./components/counter/Counter";
import Settings from "./components/settings/Settings";
import {actionsCreators} from "./store/counter-reducer";
import {useDispatch} from "react-redux";

export type TextType = `enter value and press 'set'` | `Incorrect value!`

type GetValueType = string | null
let getMinValue: GetValueType = localStorage.getItem('min')
let getMaxValue: GetValueType = localStorage.getItem('max')

function App() {
    let dispatch = useDispatch()
    const [text, setText] = useState<TextType>(`enter value and press 'set'`)
    useEffect(() => {
        if (getMinValue && getMaxValue) {
            dispatch(actionsCreators.ChangeStartValue(+getMinValue))
            dispatch(actionsCreators.ChangeMaxValue(+getMaxValue))
        }
    }, [])


    return (
        <div className="app">
            <Settings
                text={text}
                setText={setText}
            />
            <Counter
                text={text}
                setText={setText}
            />
        </div>
    );
}

export default App;
