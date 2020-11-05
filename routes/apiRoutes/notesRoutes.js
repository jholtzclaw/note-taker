const fs = require('fs');
const router = require('express').Router()
//needs update
const { createNewNote } = require('../../libs/notes')
const db = require('../../db/db')
//needs update
router.get('/notes', (req, res) => {
    let result = db
    if (result) {
        res.json(result)
    } else {
        res.send(404)
    }
})
router.post('/notes', (req, res) => {
    req.body.id = db.length.toString()
    // if (!validateNote(req.body)) {
    //     res.status(400).send('The note is not properly formatted.')
    // } else {
    // if (createNewNote) {

        const note = createNewNote(req.body, db)

        res.json(note)
    // }
})
module.exports = router
