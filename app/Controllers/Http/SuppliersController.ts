import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import SupplierRepository from 'App/Repository/SupplierRepository'

export default class SuppliersController {
  public async index({ request, response }: HttpContextContract) {
    try {
      const payload = request.all()
      const data = await SupplierRepository.index(payload)
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
      const data = await SupplierRepository.store(payload)
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
      const data = await SupplierRepository.findById(id, relations)
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
      const data = await SupplierRepository.store(payload, id)
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
      const data = await SupplierRepository.destroy(id)
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
