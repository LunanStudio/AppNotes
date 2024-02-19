import './buttons.css'
function CreateNoteButton (){
    return(
        <button className="CreateNewNote"
        onClick={(event) => console.log(event.target)}
        >New Note</button>
    )
}

export {CreateNoteButton}