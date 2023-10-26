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
  
  Route.get('/products/:id','ProductsController.show')
  Route.put('/products/:id','ProductsController.update')
  Route.delete('/products/:id', 'ProductsController.destroy')
  
  Route.get('/products', 'ProductsController.index').middleware('auth')
  Route.post('/products', 'ProductsController.store')
}).prefix('/api')