const Router = require('express').Router()
const AnimeRouter = require('./AnimeRouter')
const CharacterRouter = require('./CharacterRouter')
const UserRouter = require('./UserRouter')

Router.use('/anime', RestaurantRouter)
Router.use('/characters', ReviewRouter)
Router.use('/user', UserRouter)

module.exports = Router