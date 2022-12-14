import { Request, Response } from 'express'
import artistModel from '../model/artistModel'
import { iArtist } from '../model/interface/iArtist'

const artistController = {
  getAllArtists: async (req: Request, res: Response) => {
    try {
      const result: any = await artistModel.getAllArtists()
      result
        ? res.status(200).json(result)
        : res.status(500).send("Hi ha hagut un error fent l'obtenció de dades")
    } catch (error) {
      res.status(400).send(error.message)
    }
  },

  getOneArtist: async (req: Request, res: Response) => {
    try {
      const param = req.params.id
      const artist: any = await artistModel.getOneArtist(param)
      res.json(artist)
    } catch (error) {
      res.status(400).send(error.message)
    }
  },

  saveArtist: async (req: Request, res: Response) => {
    try {
      const {
        estado,
        nombre,
        foto,
        genero,
        descripcion,
        generomusical,
        instrumentacion,
        telefono1,
        telefono2,
        email,
        web,
        redsocial1,
        redsocial2,
        redsocial3,
        notas,
        id_usuaria,
        id_ciudad,
      }: iArtist = req.body

      if (
        !nombre ||
        !foto ||
        !descripcion ||
        !generomusical ||
        !telefono1 ||
        !email ||
        !web ||
        !id_usuaria ||
        !id_ciudad
      ) {
        res
          .status(400)
          .send(
            'El camps nom, imatge, descripció, gènere musical, telèfon1, email, web, id_usuaria, id_ciudad són obligatoris',
          )
        return
      }

      const result = await artistModel.saveArtist({
        estado,
        nombre,
        foto,
        genero,
        descripcion,
        generomusical,
        instrumentacion,
        telefono1,
        telefono2,
        email,
        web,
        redsocial1,
        redsocial2,
        redsocial3,
        notas,
        id_usuaria,
        id_ciudad,
      })
      result
        ? res.status(200).json({ result: result })
        : res.status(500).send("No s'ha pogut crear una nova usuària")
    } catch (error) {
      res.status(400).send(error.message)
    }
  },

  modifyArtist: async (req: Request, res: Response) => {
    try {
      const {
        estado,
        nombre,
        foto,
        genero,
        descripcion,
        generomusical,
        instrumentacion,
        telefono1,
        telefono2,
        email,
        web,
        redsocial1,
        redsocial2,
        redsocial3,
        notas,
        id_usuaria,
        id_ciudad,
        id,
      }: iArtist = req.body

      await artistModel.modifyArtist({
        estado,
        nombre,
        foto,
        genero,
        descripcion,
        generomusical,
        instrumentacion,
        telefono1,
        telefono2,
        email,
        web,
        redsocial1,
        redsocial2,
        redsocial3,
        notas,
        id_usuaria,
        id_ciudad,
        id,
      })

      const result = await artistModel.getOneArtist(id)

      result
        ? res.status(201).json(result)
        : res.status(500).send("No s'ha pogut modificar l'usuària")
    } catch (error) {
      res.status(400).send(error.message)
    }
  },
  deleteArtist: async (req: Request, res: Response) => {
    try {
      const param = req.params.id
      const result = await artistModel.deleteArtist(param)
      result
        ? res
            .status(201)
            .json({ result: `L'artista amb ID: ${param} està eliminat` })
        : res.status(500).send("No s'ha pogut borrar l'artista seleccionada")
    } catch (error) {
      res.status(400).send(error.message)
    }
  },
}
export default artistController
