import React from 'react';
import './App.css';
import {Route, Routes} from "react-router-dom";
import Counter from "./components/counter/Counter";
import Settings from "./components/settings/Settings";
import {store} from "./store/store";
import {Provider} from "react-redux";

function App() {
    return (
        <Provider store={store}>
            <div className="app">
                <Routes>
                    <Route path="/" element={<Counter/>}/>
                    <Route path="settings" element={<Settings/>}/>
                </Routes>
            </div>
        </Provider>
    );
}

export default App;
