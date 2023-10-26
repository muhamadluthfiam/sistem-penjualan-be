import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import ProductRepository from 'App/Repository/ProductRepository'


export default class ProductsController {
  public async index({ request, response }: HttpContextContract) {
    const payload = request.all()
    const relations = ['category', 'unit', 'brand'];
    const data = await ProductRepository.index(payload, relations)
    return response.json({
      message: 'success',
      data: data
    })
  }

  // public async store({ request, response }: HttpContextContract) {
  //   const payload = request.all()
  //   const data = await ProductRepository.store(payload)
  //   return response.json(data)
  // }

  // public async show({ params, response }: HttpContextContract) {
  //   const id = params.id
  //   const data = await ProductRepository.findById(id)
  //   return response.json(data)
  // }

  // public async update({ params, request, response }: HttpContextContract) {
  //   const id = params.id
  //   const payload = request.all()
  //   const data = await ProductRepository.store(payload, id)
  //   return response.json(data)
  // }

  // public async destroy({ params, response }: HttpContextContract) {
  //   const id = params.id
  //   const data = await productRepository.destroy(id)
  //   return response.json(data)
  // }
}
