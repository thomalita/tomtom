const Router = require('express').Router()
const controller = require('../controllers/CharacterController')

Router.get('/', controller.GetAllCharacters)
Router.get('/anime/:anime_id', controller.GetCharacterByAnimeId)
Router.post('/', controller.CreateCharacter)
Router.put('/:character_id', controller.UpdateCharacter)
Router.delete('/:character_id', controller.DeleteCharacter)
Router.get('/:character_id', controller.GetCharacterById)

module.exports = Router