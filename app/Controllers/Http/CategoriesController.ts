import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import CategoryRepository from 'App/Repository/CategoryRepository'

export default class CategoriesController {
  public async index({ request, response }: HttpContextContract) {
    try {
      const payload = request.all()
      const data = await CategoryRepository.index(payload)
      return response.status(200).json({
        data
      })
    } catch (error) {
      return response.status(400).json({
        message: error.message
      })
    }
  }

  public async store({ request, response }: HttpContextContract) {
    try {
      const payload = request.all()
      const data = await CategoryRepository.store(payload)
      return response.status(201).json({
        data
      })
    } catch (error) {
      return response.status(400).json({
        message: error.message
      })
    }
  }

  public async show({ params, response }: HttpContextContract) {
    try {
      const relations = ['category', 'unit', 'brand'];
      const id = params.id
      const data = await CategoryRepository.findById(id, relations)
      return response.status(201).json({
        data
      })
    } catch (error) {
      return response.status(400).json({
        message: error.message
      })
    }
  }

  public async update({ params, request, response }: HttpContextContract) {
    try {
      const id = params.id
      const payload = request.all()
      const data = await CategoryRepository.store(payload, id)
      return response.status(201).json({
        data
      })
      
    } catch (error) {
      return response.status(400).json({
        message: error.message
      })
    }
  }

  public async destroy({ params, response }: HttpContextContract) {
    try {
      const id = params.id
      const data = await CategoryRepository.destroy(id)
      return response.status(2001).json({
        data
      })
    } catch (error) {
      return response.status(400).json({
        message: error.message
      })
    }
  }
}
