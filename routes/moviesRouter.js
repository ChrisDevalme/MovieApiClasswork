const express = require('express')
const router = express.Router()
const movieCtrl = require("../controllers/moviesController")

router.post('/', movieCtrl.create)
// POST /movies: Accepst Movie Data and Creates A Movie

router.get('/', movieCtrl.index)
// GET /movies: Returns a list of all movies.

router.get('/:id', movieCtrl.show)
// GET /movies/:id: Gets An Individual Movie

router.post('/movieId/performers/:perfprmerId', movieCtrl.addPerformer)
// POST /movies/:movieId/performers/:performerId:




movie.exports = router