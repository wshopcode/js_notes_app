 import NotesAPI from "./NotesAPI.js"

 NotesAPI.saveNotes({
    id: 828588,
    title: "The tile has changed!",
    body: "Napster things."
 });

 console.log(NotesAPI.getALLNotes());