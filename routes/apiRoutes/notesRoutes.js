const fs = require('fs');
const router = require('express').Router()
const { createNewNote } = require('../../libs/notes')
const db = require('../../db/db')
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

        const note = createNewNote(req.body, db)

        res.json(note)   
})
module.exports = router
