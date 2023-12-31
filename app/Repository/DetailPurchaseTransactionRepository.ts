import BaseRepository from "App/Traits/BaseRepository";
import DetailPurchaseTransaction from "App/Models/DetailPurchaseTransaction";
import Product from "App/Models/Product";
import Database from "@ioc:Adonis/Lucid/Database";

class DetailPurchaseTransactionRepository extends BaseRepository {
  constructor() {
    super(DetailPurchaseTransaction)
  }

  async storeTrx(purchase_transaction_id: number, product: Array<{ product_id: number, quantity: number, purchase_price: number }>) {
    const trx = await Database.transaction()
    try {
      for (const productData of product) {
          const { product_id, quantity, purchase_price } = productData;

          const product = await Product.find(product_id);
          if (!product) {
              await trx.rollback();
              throw new Error('Product not available');
          }

          // if (product.quantity <= quantity) {
          //     await trx.rollback();
          //     throw new Error('Insufficient stock for product');
          // }

          product.quantity += quantity;
          await product.save();

          const data = { purchase_transaction_id, product_id, quantity, purchase_price };
          await DetailPurchaseTransaction.create(data, trx);
      }
      trx.commit
    } catch (error) {
      await trx.rollback()
      throw error;
    }
  }

  public async findByIdDetail (id, relations: string[]) {
    try {  
      const query = this.model.query().where('purchase_transaction_id', id)
      relations.forEach(relation => {
        query.preload(relation)
      })
      return query
    } catch (error) {
      console.log(error)
    }
  }
  
  public async findIdTrx (id) {
    try {  
      const query = this.model.query().where('purchase_transaction_id', id)
      // relations.forEach(relation => {
      //   query.preload(relation)
      // })
      return query()
    } catch (error) {
      console.log(error)
    }
  }
}



export = new DetailPurchaseTransactionRepository()

