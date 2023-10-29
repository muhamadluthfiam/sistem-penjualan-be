import BaseRepository from "App/Traits/BaseRepository";
import DetailSaleTransaction from "App/Models/DetailSaleTransaction";
import Product from "App/Models/Product";
import Database from "@ioc:Adonis/Lucid/Database";

class DetailSaleTransactionRepository extends BaseRepository {
  constructor() {
    super(DetailSaleTransaction)
  }

  async storeTrx(sale_transaction_id: number, product: Array<{ product_id: number, quantity: number, sale_price: number }>) {
    const trx = await Database.transaction()
    try {
      for (const productData of product) {
          const { product_id, quantity, sale_price } = productData;

          const product = await Product.find(product_id);
          if (!product) {
              await trx.rollback();
              throw new Error('Product not available');
          }

          if (product.quantity <= quantity) {
              await trx.rollback();
              throw new Error('Insufficient stock for product');
          }

          product.quantity -= quantity;
          await product.save();

          const data = { sale_transaction_id, product_id, quantity, sale_price };
          await DetailSaleTransaction.create(data, trx);
      }
      trx.commit
    } catch (error) {
      await trx.rollback()
      throw error;
    }
  }
}



export = new DetailSaleTransactionRepository()

