import BaseSeeder from '@ioc:Adonis/Lucid/Seeder'

export default class extends BaseSeeder {
  private async runSeeder(Seeder: { default: typeof BaseSeeder }) {
    /**
     * Do not run when not in a environment specified in Seeder
     */
    await new Seeder.default(this.client).run()
  }

  public async run () {
    
    // Write your database queries inside the run method

    await this.runSeeder(await import('../CategoriesSeeder'))
    await this.runSeeder(await import('../UnitsSeeder'))
    await this.runSeeder(await import('../BrandsSeeder'))
    await this.runSeeder(await import('../ProductsSeeder'))
    await this.runSeeder(await import('../CustomerSeeder'))
  }
}
