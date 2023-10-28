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



}).prefix('/api').middleware('auth')