const { Anime } = require('../models')

const GetAllAnime = async (req, res) => {
  try {
    const animes = await Anime.findAll()
    res.send(animes)
  } catch (error) {
    throw error
  }
}

const GetAnimeById = async (req, res) => {
  try {
    const anime = await Anime.findByPk(req.params.anime_id)
    res.send(anime)
  } catch (error) {
    throw error
  }
}

const CreateAnime = async (req, res) => {
  try {
    const newAnime = await Anime.create({ ...req.body })
    res.send(newAnime)
  } catch (error) {
    throw error
  }
}

const UpdateAnime = async (req, res) => {
    try {
      let animeId = parseInt(req.params.anime_id)
      const updatedAnime = await Anime.update(req.body, {
        where: { id: animeId },
        returning: true
      })
      res.send(updatedAnime)
    } catch (error) {
      throw error
    }
  }
  
  const DeleteAnime = async (req, res) => {
    try {
      let animeId = parseInt(req.params.anime_id)
      await Anime.destroy({ where: { id: animeId } })
      res.send({ message: `Deleted Anime with an id of ${animeId}` })
    } catch (error) {
      throw error
    }
  }

module.exports = {
  GetAllAnime,
  GetAnimeById,
  CreateAnime,
  UpdateAnime,
  DeleteAnime
}