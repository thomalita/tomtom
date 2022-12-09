const Router = require('express').Router()
const controller = require('../controllers/AnimeController')

Router.get('/', controller.GetAllAnime)
Router.post('/', controller.CreateAnime)
Router.put('/anime_id', controller.UpdateClass)
Router.delete('/anime_id', controller.DeleteClass)
Router.get('/:anime_id', controller.GetClassById)


module.exports = Router