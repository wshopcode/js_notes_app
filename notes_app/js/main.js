import App from "./App.js";

const root = document.getElementById("app");
const app = new App(root); 


 




/*const view = new NotesView(app, {
   onNoteAdd() {
      console.log("Let's add a new note here!");
   },
   onNoteSelect(id) {
      console.log("Note Selected!" + id);
   },
   onNoteDelete(id) {
      console.log("Note DELETED!" + id);
   },

   onNoteEdit(newTitle, newBody){
      console.log(newTitle);
      console.log(newBody);
   },
});

const notes = NotesAPI.getALLNotes();

view.updateNoteList(notes);
view.updateActiveNote(notes[0]);*/