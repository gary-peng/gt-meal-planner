import './App.css';
import React, { useState } from 'react'
import Menu from './components/Menu';
import Restrictions from './components/Restrictions';
import DinningHalls from './components/DinningHalls';
import { RestrictContext, CalorieContext } from './context/GlobalContext';

function App() {
    const [restrict, setRestrict] = useState([]);
    const [calorie, setCalorie] = useState(0);

    return (
        <div className='container'>
            <h1>Gerogia Tech Meal Planner</h1>
            <RestrictContext.Provider value={{restrict, setRestrict}}>
                <DinningHalls />
                <Restrictions />
                <CalorieContext.Provider value={{calorie, setCalorie}}>
                    <h6>{calorie} calories</h6>
                    <Menu /> 
                </CalorieContext.Provider>
            </RestrictContext.Provider>
        </div>
    );
}

export default App;

