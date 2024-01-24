const Performer = require('../models/performer')

exports.create = async function create (req, res) {
    try {
        const createdPerformer = await Performer.create(req.body)
        res.status(200).json(createdPerformer)
    } catch (error) {
        res.status(400).json({ msg: error.message })
    }
}

exports.index = async function index (req, res) {
    try {
        const performers = await Performer.find({})
        res.status(200).json(performers)
    } catch (error) {
        res.status(400).json({ msg: error.message })
    }
}