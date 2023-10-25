import BaseSeeder from '@ioc:Adonis/Lucid/Seeder'
import CustomerFactory from 'Database/factories/CustomerFactory'

export default class extends BaseSeeder {
  public async run () {
    // Write your database queries inside the run method
    await CustomerFactory.createMany(20)
  }
}
