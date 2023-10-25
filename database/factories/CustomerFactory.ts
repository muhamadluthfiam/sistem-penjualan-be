import CustomersFactory from 'App/Models/Customer'
import Factory from '@ioc:Adonis/Lucid/Factory'

export default Factory.define(CustomersFactory, ({ faker }) => {
  const workshop = [
    "Bengkel Motor Sentosa",
    "Bengkel Sejahtera Motor",
    "Bengkel Utama Motor",
    "Bengkel Cahaya Motor",
    "Bengkel Sinar Harapan",
    "Bengkel Maju Jaya",
    "Bengkel Sehat Motor",
    "Bengkel Gemilang",
    "Bengkel Harmoni",
    "Bengkel Indah Motor",
    "Bengkel Prima Motor",
    "Bengkel Mandiri",
    "Bengkel Maju Terus",
    "Bengkel Sejahtera Jaya",
    "Bengkel Sejahtera Abadi",
    "Bengkel Amanah Motor",
    "Bengkel Harapan Baru",
    "Bengkel Jaya Raya",
    "Bengkel Cemerlang",
    "Bengkel Sejahtera Sentosa"
  ]

  const address = [
    "Jl. Cikutra No. 123, Bandung",
    "Jl. Pasteur No. 45, Bandung",
    "Jl. Soekarno-Hatta No. 78, Bandung",
    "Jl. Riau No. 56, Bandung",
    "Jl. Dago No. 89, Bandung",
    "Jl. Ahmad Yani No. 33, Bandung",
    "Jl. Padjajaran No. 65, Bandung",
    "Jl. Kebonjati No. 21, Bandung",
    "Jl. Diponegoro No. 12, Bandung",
    "Jl. Merdeka No. 21 Bandung",
    "Jl. Cihampelas No. 78, Bandung",
    "Jl. Sumatra No. 29, Bandung",
    "Jl. Asia Afrika No. 11, Bandung",
    "Jl. Rancabolang No. 5, Bandung",
    "Jl. Lengkong No. 16, Bandung",
    "Jl. Ir. H. Djuanda No. 31, Bandung",
    "Jl. Sunda No. 92, Bandung",
    "Jl. Jakarta No. 5generatePhoneNumber()Bandung",
    "Jl. Pungkur No. 7, Bandung",
    "Jl. Gegerkalong No. 37, Bandung"
  ]

  const phone = [
    "081234567890",
    "081234567891",
    "081234567892",
    "081234567893",
    "081234567894",
    "081234567895",
    "081234567896",
    "081234567897",
    "081234567898",
    "081234567899",
    "081234567810",
    "081234567811",
    "081234567812",
    "081234567813",
    "081234567814",
    "081234567815",
    "081234567816",
    "081234567817",
    "081234567818",
    "081234567819"
  ]

  const user = workshop[Math.floor(Math.random() * workshop.length)];
  const addressUser = address[Math.floor(Math.random() * address.length)];
  const phoneUser = phone[Math.floor(Math.random() * phone.length)];

  return {
    name: user,
    address: addressUser,
    phone: phoneUser.toString(),
    is_member: faker.datatype.boolean()
  }
}).build()
