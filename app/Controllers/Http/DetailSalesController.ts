
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
      const { sale_transaction_id, product } = request.all()
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
      const relations = ['product', 'saleTransaction', 'unit', 'brand', 'customer'];
      const id = params.id
      const data = await DetailSaleTransactionRepository.findByIdDetail(id, relations)

      const responseObj = {};

      data.forEach((item) => {
        const invoice = 'data'

        if (!responseObj[invoice]) {
          responseObj[invoice] = {
            customer: {
              name: item.customer.name,
              address: item.customer.address,
              phone: item.customer.phone
            },
            invoice: {
              name: item.saleTransaction.invoice,
              date: item.saleTransaction.date
            },
            items: []
          };
        }

        const itemData = {
          id: item.product.id,
          unit_id: item.product.unit_id,
          brand_id: item.product.brand_id,
          name: item.product.name,
          quantity: item.product.quantity,
          price: item.product.sale_price,
          unit: item.unit ? item.unit.name : '',
          brand: item.brand ? item.brand.name: ''
        };

        responseObj[invoice].items.push(itemData);
      });

    return response.status(200).json({ data: responseObj })
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