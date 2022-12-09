const { Character } = require('../models')

const GetAllCharacters = async (req, res) => {
  try {
    const characters = await Character.findAll()
    res.send(characters)
  } catch (error) {
    throw error
  }
}

const GetCharacterById = async (req, res) => {
  try {
    const character = await Character.findByPk(req.params.character_id)
    res.send(character)
  } catch (error) {
    throw error
  }
}

const CreateCharacter = async (req, res) => {
  try {
    const newCharacter = await Character.create({ ...req.body })
    res.send(newCharacter)
  } catch (error) {
    throw error
  }
}

const UpdateCharacter = async (req, res) => {
    try {
      let characterId = parseInt(req.params.character_id)
      const updatedCharacter = await Character.update(req.body, {
        where: { id: characterId },
        returning: true
      })
      res.send(updatedCharacter)
    } catch (error) {
      throw error
    }
  }
  
  const DeleteCharacter = async (req, res) => {
    try {
      let characterId = parseInt(req.params.character_id)
      await Character.destroy({ where: { id: characterId } })
      res.send({ message: `Deleted character with an id of ${characterId}` })
    } catch (error) {
      throw error
    }
  }

module.exports = {
  GetAllCharacters,
  GetCharacterById,
  CreateCharacter,
  UpdateCharacter,
  DeleteCharacter
}