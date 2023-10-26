import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import ProductRepository from 'App/Repository/ProductRepository'


export default class ProductsController {
  public async index({ request, response }: HttpContextContract) {
    try {
      const payload = request.all()
      const relations = ['category', 'unit', 'brand'];
      const data = await ProductRepository.index(payload, relations)
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
      const data = await ProductRepository.store(payload)
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
      const data = await ProductRepository.findById(id, relations)
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
      const data = await ProductRepository.store(payload, id)
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
      const data = await ProductRepository.destroy(id)
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
