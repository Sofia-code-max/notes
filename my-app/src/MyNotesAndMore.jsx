const MyNotesAndMore = ({selectedDay , updateNote}) => {

    const editMyNote = (myInput , value) => {
        updateDay({
            ...selectedDay,
            [myInput]:value
        })
    }

    

    return <div className="whole-plan">
        <div className="meal-editing">
            
            <input 
                type="text" 
                className="myInput" 
                placeholder="Title" 
                id="title" 
                value={selectedDay.title} 
                onChange={(e) => editMyNote('title' , e.target.value)}
            />
            <textarea
                placeholder="note...." 
                id="NoteForADay" value={selectedDay.mealForADay} 
                onChange={(e) => editMyNote('mealForADay' , e.target.value)}>
            </textarea>
            <textarea 
                placeholder="note..." 
                id="mealForADay" 
                value={selectedDay.ingredients} onChange={(e) => editMyNote('ingredients' , e.target.value)}> 
            </textarea>

        </div>
    </div>

}

export default MyNotesAndMore;