const Router = require('express').Router()
const AnimeRouter = require('./AnimeRouter')
const CharacterRouter = require('./CharacterRouter')
const UserRouter = require('./UserRouter')

Router.use('/anime', AnimeRouter)
Router.use('/characters', CharacterRouter)
Router.use('/user', UserRouter)

module.exports = Router