
import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import DetailSaleTransactionRepository from 'App/Repository/DetailSaleTransactionRepository'

export default class DetailSalesController {
  public async index({ request, response }: HttpContextContract) {
    try {
      const payload = request.all()
      const data = await DetailSaleTransactionRepository.index(payload)
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
      const { sale_transaction_id, product } = request.body()
      const data = await DetailSaleTransactionRepository.storeTrx(sale_transaction_id, product)
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
      const relations = ['product', 'sale', 'customers'];
      const id = params.id
      const data = await DetailSaleTransactionRepository.findById(id, relations)
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
      const data = await DetailSaleTransactionRepository.store(payload, id)
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
      const data = await DetailSaleTransactionRepository.destroy(id)
      return response.status(200).json({
        data
      })
    } catch (error) {
      return response.status(400).json({
        message: error.message
      })
    }
  }
}