import React from 'react';
import './App.css';
import {Route, Routes} from "react-router-dom";
import Counter from "./components/counter/Counter";
import Settings from "./components/settings/Settings";

function App() {
    return (
        <div className="app">
            <Routes>
                <Route path="/" element={<Counter/>}/>
                <Route path="settings" element={<Settings/>}/>
            </Routes>
        </div>
    );
}

export default App;
