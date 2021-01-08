import React, { useState } from 'react';
import Menu from './components/Menu';
import Restrictions from './components/Restrictions';
import DinningHalls from './components/DinningHalls';
import { RestrictContext, CalorieContext, DinnHallContext } from './context/GlobalContext';

import './App.css';

function App() {
    const [restrict, setRestrict] = useState([]);
    const [calorie, setCalorie] = useState(0);
    const [dinnHall, setDinnHall] = useState('nav');

    return (
        <div className='container'>
            <h1 className='mt-5 mb-4'>Gerogia Tech Meal Planner</h1>
            <RestrictContext.Provider value={{restrict, setRestrict}}>
                <DinnHallContext.Provider value={{dinnHall, setDinnHall}}>
                    <DinningHalls />
                    <Restrictions />
                    <CalorieContext.Provider value={{calorie, setCalorie}}>
                        <h6>{calorie} calories</h6>
                        <Menu /> 
                    </CalorieContext.Provider>
                </DinnHallContext.Provider>
            </RestrictContext.Provider>
        </div>
    );
}

export default App;

