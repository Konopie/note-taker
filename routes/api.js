const path = require('path');
const router = require('express').Router();
const notesArray = require('../db/db.json')
const fs = require('fs')

function createNewNote(body, notesArray) {
    const Note = body;
    notesArray.push(Note);
    fs.writeFileSync(
      path.join(__dirname, '../db/db.json'),
      JSON.stringify(notesArray, null, 2)
    );
    return Note;
  }

function deleteNote(id) {
    notesArray.splice(id, 1)
    return notesArray;
}

router.get('/notes', (req, res)=>{
  console.log(notesArray)
    res.json(notesArray)
})

router.get('/notes/:id', (req, res)=>{
    res.json(notesArray[req.params.id])
})

router.post('/notes', (req, res) => {
    // set id based on what the next index of the array will be
    req.body.id = notesArray.length.toString();
  
    if (req.body){
      const Note = createNewNote(req.body, notesArray);
      res.json(Note);
    }
});

router.delete('/notes/:id', (req, res)=>{
    notesArray.splice(req.params, 1)
    res.json(notesArray);
})
  
  
module.exports = router;