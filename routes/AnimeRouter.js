const Router = require('express').Router()
const controller = require('../controllers/AnimeController')

Router.get('/', controller.GetAllAnime)
Router.post('/', controller.CreateAnime)
Router.put('/anime_id', controller.UpdateAnime)
Router.delete('/anime_id', controller.DeleteAnime)
Router.get('/:anime_id', controller.GetAnimeById)


module.exports = Router