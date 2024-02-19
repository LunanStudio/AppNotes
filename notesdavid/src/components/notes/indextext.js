import './indextext.css';
function NoteText ({texttitle, textnote}){
    return(
        <li className="NoteText">
            <h2>{texttitle}</h2>
            <p className="NoteText-p">{textnote}</p>
            {/*<span className={`Icon ${props.deletenote && "IconBorrar"}`}>x</span>*/}
        </li>
    );
}

export {NoteText}