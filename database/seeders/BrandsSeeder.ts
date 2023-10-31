import BaseSeeder from '@ioc:Adonis/Lucid/Seeder'
import Brand from 'App/Models/Brand'

export default class extends BaseSeeder {
  public async run () {
    // Write your database queries inside the run method
    await Brand.createMany([
      { name: "KPS" },
      { name: "TMS" },
      { name: "DBS" },
      // { name: "Proliner" },
      // { name: "R9" },
      // { name: "Power One" },
      // { name: "RCM" },
      // { name: "MTR" },
      // { name: "Force" },
      // { name: "Enduro" },
      // { name: "SWS" },
      { name: "VND" },
      // { name: "KTC" },
      // { name: "MF1" },
      { name: "YSS" },
      // { name: "MPM" },
      // { name: "NGK" },
      // { name: "Thailand" },
      // { name: "TDR" },
      // { name: "KTC" },
      // { name: "BREMBO" }
    ])
  }
}
