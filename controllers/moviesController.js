const Movie = require("../models/movie")
const Performer = require('../models/performer')
// router.post('/', movieCtrl.create)
// POST /movies: Accepst Movie Data and Creates A Movie

// router.get('/', movieCtrl.index)
// GET /movies: Returns a list of all movies.

// router.get('/:id', movieCtrl.show)
// GET /movies/:id: Gets An Individual Movie

// router.get('/movieId/performers/:perfprmerId', movieCtrl.addPerformer)
// POST /movies/:movieId/performers/:performerId:

exports.create = async function create (req, res) {
    try {
        const createdMovie = await Movie.create(req.body)
        res.status(200).json(createdMovie)
    } catch (error) {
        res.status(400).json({ msg: error.message })
    }
}

exports.index = async function index (req, res) {
    try {
        const foundMovies = await Movie.find({})
        res.status(200).json(foundMovies)
    } catch (error) {
        res.status(400).json({ msg: error.message })
    }
    }

exports.show = async function show (req, res) {
    try {
        const foundMovie = await Movie.findOne({ _id: req.params.id })
        res.status(200).json(foundMovie)
    } catch (error) {
        res.status(400).json({ msg: error.message })
    }
}

exports.addPerformer = async function addPerformer (req, res) {
    try {
        const foundPerformer = await Perfprmer.findOne({ _id: req.params.performerId })
        if(!foundPerformer) throw new Error(`Could not locate Performer with Id ${req.params.performerId}`)
        const foundMovie = await Movie.findOne({ _id: req.params.movieId })
        if(!foundMovie) throw new Error(`Could not locate Performer with Id ${req.params.movieId}`)
    } catch (error) {
        res.status(400).json({ msg: error.message })
    }
}