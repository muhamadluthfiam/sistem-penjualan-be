import BaseSeeder from '@ioc:Adonis/Lucid/Seeder'
import User from 'App/Models/User'


export default class extends BaseSeeder {
  public async run () {
    // Write your database queries inside the run method
    User.createMany([
      {
        name: 'super admin',
        email: 'super@admin.com',
        password: 'password',
        roleId: 2
      },
      {
        name: 'sales',
        email: 'sales@admin.com',
        password: 'password',
        roleId: 1
      }
    ])
  }
}
