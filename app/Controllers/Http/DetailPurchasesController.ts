import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import DetailPurchaseTransactionRepository from 'App/Repository/DetailPurchaseTransactionRepository'

export default class DetailPurchasesController {
  public async index({ request, response }: HttpContextContract) {
    try {
      const payload = request.all()
      const data = await DetailPurchaseTransactionRepository.index(payload)
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
      const { purchase_transaction_id, product } = request.all()
      const data = await DetailPurchaseTransactionRepository.storeTrx(purchase_transaction_id, product)
      return response.status(200).json({
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
      const relations = ['product', 'saleTransaction', 'unit', 'brand', 'supplier'];
      const id = params.id
      const data = await DetailPurchaseTransactionRepository.findByIdDetail(id, relations)

      const responseObj = {};

      data.forEach((item) => {
        const invoice = 'data'

        if (!responseObj[invoice]) {
          responseObj[invoice] = {
            supplier: {
              name: item.supplier.name,
              address: item.supplier.address,
              phone: item.supplier.phone
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
          quantity: item.quantity,
          price: item.salePrice,
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
      const data = await DetailPurchaseTransactionRepository.store(payload, id)
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
      const data = await DetailPurchaseTransactionRepository.destroy(id)
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

