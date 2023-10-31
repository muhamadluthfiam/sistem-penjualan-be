import BaseSeeder from '@ioc:Adonis/Lucid/Seeder'
import ProductFactory from 'Database/factories/ProductFactory'
import Product from 'App/Models/Product'


export default class extends BaseSeeder {
  public async run () {
    // Write your database queries inside the run method
    // await ProductFactory.createMany(20)
    await Product.createMany([
      {
        categoryId: 1,
        unitId: 1,
        brandId: 1,
        name: "Selang Bensin",
        quantity: 100,
        purchase_price: 2000, 
        sale_price: 5000,
        profit: 3000,
        slug: "selang-bensin"
      },
      {
        categoryId: 2,
        unitId: 1,
        brandId: 2,
        name: "Klip Mio",
        quantity: 100,
        purchase_price: 200, 
        sale_price: 400,
        profit: 200,
        slug: "klip-mio"
      },
      {
        categoryId: 5,
        unitId: 4,
        brandId: 4,
        name: "Shockbreaker GT Pro",
        quantity: 2,
        purchase_price: 450000, 
        sale_price: 500000,
        profit: 50000,
        slug: "shockbreaker-gt-pro"
      }
    ])
  }
}
