import { CarsController } from './controllers/CarsController.js';
import { ExampleController } from './controllers/ExampleController.js';
import { HouseController } from './controllers/HousesController.js';

class App {
  carsController = new CarsController()
  houseController = new HouseController()
}

window['app'] = new App()


