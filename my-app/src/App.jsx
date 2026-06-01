import { useState, useEffect } from 'react';
import { v4 as uuid } from 'uuid';  
import './App.css';
import MyNotesAndMore from './MyNotesAndMore'
import MyNotes from './myNotes';

function App() {
    const [mealPlans, setMealPlans] = useState(
        localStorage.mealPlans ? JSON.parse(localStorage.mealPlans) : []
    );
    const [selectedDay, setSelectedDay] = useState(false);

    const addNote = () => {
        const newMeal = {
            title: 'Title ...',
            id: uuid(),  
            mealForADay: '',
            ingredients: ''
        };
        setMealPlans([newMeal, ...mealPlans]); 
    };

    const deleteDay = (mealId) => {
        setMealPlans(mealPlans.filter(({ id }) => id !== mealId));
    };

    const updateDay = (updatedMeal) => { 
        const updatedMeals = mealPlans.map((mealPlan) => {
            if (mealPlan.id === updatedMeal.id) {  
                return updatedMeal;
            }
            return mealPlan;
        });
        setMealPlans(updatedMeals);
    };

    const ActivateMeal = () => {
        return mealPlans.find(({ id }) => id === selectedDay);
    };

    useEffect(() => {
        localStorage.setItem('mealPlans', JSON.stringify(mealPlans));
    }, [mealPlans]);

    return (
        <div className='App'>
            <MyNotes
                mealPlans={mealPlans}
                addNote={addNote}
                deleteDay={deleteDay}
                selectedDay={selectedDay}
                setSelectedDay={setSelectedDay}
            />
            <MyNotesAndMore
                selectedDay={ActivateMeal()} 
                updateDay={updateDay}
            />

        </div>
    );
}

export default App;