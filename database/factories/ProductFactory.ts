import ProductsFactory from 'App/Models/Product'
import Factory from '@ioc:Adonis/Lucid/Factory'

export default Factory.define(ProductsFactory, ({ faker }) => {
  const type = [
    'Selang Bensin', 
    'Klip Mio', 
    'Klip Grand', 
    'Kampas Kopling', 
    'Venbelt', 
    'Piston',
    'Busi', 
    'Filter Udara', 
    'Saringan Bensin', 
    'Gigi Transmisi', 
    'Lampu Depan', 
    'Lampu Belakang', 
    'Kipas Radiator', 
    'Starter Motor'
  ]

  const types = type[Math.floor(Math.random() * type.length)];


  const prices = parseFloat(faker.finance.amount({ min: 5, max: 10 })) * 10000;
  const salePrice = prices * 1.2;
  const slug = types.toLowerCase().replace(/\s+/g, '-').replace(/[^a-z0-9-]/g, '')
  const profit = salePrice - prices
  return {
    //
    categoryId: Math.floor(Math.random() * 5) + 1,
    unitId: Math.floor(Math.random() * 3) + 1,
    brandId: Math.floor(Math.random() * 4) + 1,
    name: types,
    quantity: Math.floor(Math.random() * 100) + 1,
    purchase_price: prices, 
    sale_price: salePrice,
    profit: profit,
    slug: slug
  }
}).build()
