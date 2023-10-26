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


Route.group(() => {
  Route.post('/auth/register', 'AuthController.register')
  Route.post('/auth/login', 'AuthController.login')
  
  Route.get('/products', 'ProductsController.index').middleware('auth')
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



}).prefix('/api')