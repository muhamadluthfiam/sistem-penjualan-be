/*
|--------------------------------------------------------------------------
| Routes
|--------------------------------------------------------------------------
|
| This file is dedicated for defining HTTP routes. A single file is enough
| for majority of projects, however you can define routes in different
| files and just make sure to import them inside this file. For example
|
| Define routes in following two files
| ├── start/routes/cart.ts
| ├── start/routes/customer.ts
|
| and then import them inside `start/routes.ts` as follows
|
| import './routes/cart'
| import './routes/customer'
|
*/

import Route from '@ioc:Adonis/Core/Route'


Route.post('/api/auth/register', 'AuthController.register')
Route.post('/api/auth/login', 'AuthController.login')

Route.group(() => {
  
  Route.get('/products', 'ProductsController.index')
  Route.get('/products/:id','ProductsController.show')
  Route.put('/products/:id','ProductsController.update')
  Route.delete('/products/:id', 'ProductsController.destroy')
  Route.post('/products', 'ProductsController.store')

  Route.get('/brands', 'BrandsController.index')
  Route.get('/brands/:id','BrandsController.show')
  Route.put('/brands/:id','BrandsController.update')
  Route.delete('/brands/:id', 'BrandsController.destroy')
  Route.post('/brands', 'BrandsController.store')
  
  Route.get('/customer', 'CustomersController.index')
  Route.get('/customer/:id','CustomersController.show')
  Route.put('/customer/:id','CustomersController.update')
  Route.delete('/customer/:id', 'CustomersController.destroy')
  Route.post('/customer', 'CustomersController.store')
  
  Route.get('/supplier', 'SuppliersController.index')
  Route.get('/supplier/:id','SuppliersController.show')
  Route.put('/supplier/:id','SuppliersController.update')
  Route.delete('/supplier/:id', 'SuppliersController.destroy')
  Route.post('/supplier', 'SuppliersController.store')
  
  Route.get('/unit', 'UnitsController.index')
  Route.get('/unit/:id','UnitsController.show')
  Route.put('/unit/:id','UnitsController.update')
  Route.delete('/unit/:id', 'UnitsController.destroy')
  Route.post('/unit', 'UnitsController.store')
  
  Route.get('/category', 'CategoriesController.index')
  Route.get('/category/:id','CategoriesController.show')
  Route.put('/category/:id','CategoriesController.update')
  Route.delete('/category/:id', 'CategoriesController.destroy')
  Route.post('/category', 'CategoriesController.store')
  
  Route.get('/sale-transaction', 'SaleTransactionController.index')
  Route.get('/sale-transaction/:id','SaleTransactionController.show')
  Route.put('/sale-transaction/:id','SaleTransactionController.update')
  Route.delete('/sale-transaction/:id', 'SaleTransactionController.destroy')
  Route.post('/sale-transaction', 'SaleTransactionController.store')

  Route.get('/detail-sale-transaction', 'DetailSalesController.index')
  Route.get('/detail-sale-transaction/:id','DetailSalesController.show')
  Route.put('/detail-sale-transaction/:id','DetailSalesController.update')
  Route.delete('/detail-sale-transaction/:id', 'DetailSalesController.destroy')
  Route.post('/detail-sale-transaction', 'DetailSalesController.store')
  
  Route.get('/purchase-transaction', 'PurchaseTransactionsController.index')
  Route.get('/purchase-transaction/:id','PurchaseTransactionsController.show')
  Route.put('/purchase-transaction/:id','PurchaseTransactionsController.update')
  Route.delete('/purchase-transaction/:id', 'PurchaseTransactionsController.destroy')
  Route.post('/purchase-transaction', 'PurchaseTransactionsController.store')

  Route.get('/detail-purchase-transaction', 'DetailPurchasesController.index')
  Route.get('/detail-purchase-transaction/:id','DetailPurchasesController.show')
  Route.put('/detail-purchase-transaction/:id','DetailPurchasesController.update')
  Route.delete('/detail-purchase-transaction/:id', 'DetailPurchasesController.destroy')
  Route.post('/detail-purchase-transaction', 'DetailPurchasesController.store')

  Route.get('/permissions', 'PermisssionsController.index')
  Route.get('/permissions/:id','PermisssionsController.show')
  Route.put('/permissions/:id','PermisssionsController.update')
  Route.delete('/permissions/:id', 'PermisssionsController.destroy')
  Route.post('/permissions', 'PermisssionsController.store')
  


}).prefix('/api').middleware('auth')