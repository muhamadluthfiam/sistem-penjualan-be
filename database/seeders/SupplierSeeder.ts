import BaseSeeder from '@ioc:Adonis/Lucid/Seeder'
import Supplier from 'App/Models/Supplier'

export default class extends BaseSeeder {
  public async run () {
    // Write your database queries inside the run method
    await Supplier.createMany([
      {
        name: 'PD. MITRA JAYA',
        address: 'Jl. Raya Kopo No.420.A, Cirangrang, Kec. Babakan Ciparay, Kota Bandung, Jawa Barat 40225',
        phone: '081221899345'
      },
      {
        name: 'SINAR TERANG',
        address: 'Jl. Raya Cilember No.264, Sukaraja, Kec. Cicendo, Kota Bandung, Jawa Barat 40175',
        phone: '(022) 6652233'
      },
      {
        name: 'WILLYS MOTOR',
        address: 'Jl. Pungkur No.65, Balonggede, Kec. Regol, Kota Bandung, Jawa Barat 40251',
        phone: ' (022) 4239992'
      },
      {
        name: 'DIAR MOTOR',
        address: 'Jl. Jend. H. Amir Machmud No.257, Cigugur Tengah, Kec. Cimahi Tengah, Kota Cimahi, Jawa Barat 40522',
        phone: '(022) 6634851'
      }
    ])
  }
}
