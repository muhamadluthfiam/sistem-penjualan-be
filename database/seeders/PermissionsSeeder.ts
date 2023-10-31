import BaseSeeder from '@ioc:Adonis/Lucid/Seeder'
import Permission from 'App/Models/Permission'


export default class extends BaseSeeder {
  public async run () {
    // Write your database queries inside the run method
    // Permission.createMany([
    //   {
    //     name: 'dashboard',
    //     slug: '/dashboard',
    //     icon: '/svgs/ic-grid.svg',
    //   },
    //   {
    //     name: 'produk',
    //     slug: '/products',
    //     icon: '/svgs/ic-ricbox.svg'
    //   },
    //   {
    //     name: 'merk',
    //     slug: '/brands',
    //     icon: '/svgs/ic-flag.svg'
    //   },
    //   {
    //     name: 'penjualan',
    //     slug: '/transactions',
    //     icon: '/svgs/ic-transaction.svg'
    //   },
    //   {
    //     name: 'Pembelian',
    //     slug: '/transactions-purchase',
    //     icon: '/svgs/ic-transaction.svg'
    //   },
    //   {
    //     name: 'categories',
    //     slug: '/categories',
    //     icon: '/svgs/ic-category.svg'
    //   },
    //   {
    //     name: 'suppliers',
    //     slug: '/suppliers',
    //     icon: '/svgs/ic-gift.svg'
    //   },
    //   {
    //     name: 'unit',
    //     slug: '/unit',
    //     icon: '/svgs/ic-stack.svg'
    //   },
    //   {
    //     name: 'logout',
    //     slug: '/logout',
    //     icon: '/svgs/ic-signout.svg'
    //   }
    // ])
  }
}
