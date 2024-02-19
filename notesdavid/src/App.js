import React from 'react'
import { CreateNoteButton } from './components/buttons/createnotebutton';
import { DeleteNoteButton } from './components/buttons/deletenotebutton';
import { NoteText } from './components/notes/indextext';
import { NotesContainer } from './components/notes/notescontainer';
import { Searchtext } from './components/seach/searchtext';
import { PrincipalTitle } from './components/title/title';


const defaultNotes = [
  {texttitle: 'title 1', textnote: 'nota 1', deletenote:false},
  {texttitle: 'title 2', textnote: 'nota 2', deletenote:false},
  {texttitle: 'title 3', textnote: 'nota 3', deletenote:false},
  {texttitle: 'title 4', textnote: 'nota 4', deletenote:false},
  {texttitle: 'title 5', textnote: 'nota 5', deletenote:false},
];
function App() {
  const [notes, setNotes] = React.useState(defaultNotes);
  const [searchValue, setSearchValue] = React.useState('');
  const searchderivate = notes.filter(
(note) => {
  return note.textnote.toLowerCase().includes(searchValue.toLowerCase());
}
  );
  return (
    <div className="App">
      <PrincipalTitle />
      <Searchtext 
      searchValueState={searchValue}
      searchValueSetState={setSearchValue}/>
      <NotesContainer>
        {searchderivate.map(note => (
          <NoteText 
          key={note.text} 
          textnote={note.textnote} 
          deletenote={note.deletenote} 
          texttitle={note.texttitle}/>
        ))}
      </NotesContainer>
      <DeleteNoteButton/>
      <CreateNoteButton/>
    </div>
  );
}

export default App;
