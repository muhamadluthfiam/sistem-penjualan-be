import BaseSeeder from '@ioc:Adonis/Lucid/Seeder'
import Category from 'App/Models/Category'

export default class extends BaseSeeder {
  public async run () {
    // Write your database queries inside the run method
    await Category.createMany([
      // { name: "Honda Supra X 125" },
      // { name: "Honda Revo" },
      // { name: "Honda Astrea" },
      // { name: "Honda Karisma" },
      // { name: "Honda Blade" },
      // { name: "Honda Revo 110" },
      // { name: "Honda Blade 125" },
      // { name: "Yamaha Jupiter MX" },
      // { name: "Yamaha Jupiter Z" },
      // { name: "Yamaha Vega" },
      // { name: "Yamaha Vega Force" },
      // { name: "Suzuki Address" },
      // { name: "Suzuki Smash" },
      // { name: "Suzuki Shogun 125" },
      // { name: "Suzuki Crystal" },
      // { name: "Suzuki Shooter" },
      // { name: "Suzuki Satria F" },
      // { name: "Suzuki Satria R" },
      // { name: "Yamaha NMAX" },
      // { name: "Yamaha Aerox" },
      // { name: "Suzuki Address 110" },
      // { name: "Suzuki Burgman" },
      // { name: "Honda Beat" },
      // { name: "Honda Vario" },
      // { name: "Honda Scoopy" },
      { name: "Tank" },
      { name: "Cover Body" },
      { name: "Velg" },
      { name: "Mesin" },
      { name: "Aksesoris" }
    ])
  }
}
