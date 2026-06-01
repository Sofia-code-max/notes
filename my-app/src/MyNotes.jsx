const MyNotes = ({addNote , mealPlans , setSelectedDay , selectedDay , deleteDay}) => {
    return <div>
        <div className="note">
            <h1>Note</h1>
            <button className="buttonAdd" onClick={addNote}>Add</button>
        </div>
        <div>
            
            {mealPlans.map(({title , id , mealForADay}) => (
                <div className={`meal ${id === selectedDay} ? 'selected' : 'default'} `}
                    onClick={() => setSelectedDay(id)}
                >
                    
                    <p className="title">{title.substring(0 , 30)}</p>
                    <p className="title">{mealForADay.substring(0 , 60)}</p>
                    <button className="buttonDelete" onClick={() => deleteDay(id)}>Delete</button>    

                </div>
            ))}
        </div>
    </div>
} 

export default MyNotes;