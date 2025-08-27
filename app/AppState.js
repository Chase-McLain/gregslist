import { Car } from './models/Car.js'
import { House } from './models/House.js'
import { EventEmitter } from './utils/EventEmitter.js'
import { createObservableProxy } from './utils/ObservableProxy.js'

class ObservableAppState extends EventEmitter {

  /**@type {import('./models/Example.js').Example[]} */
  examples = []


  houses = [
    new House({
      address: '400 S Ratler Ave Boise ID',
      size: 672,
      bedrooms: 2,
      bathrooms: 2,
      year: 1872,
      price: 250000,
      color: '#3b3849',
      img: 'https://imgs.search.brave.com/zb0kP4M_t2r_nFr0AIxANOteNQmawRDi5IQtCeDrWeI/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5nZXR0eWltYWdl/cy5jb20vaWQvNzg0/NjI1OTcvcGhvdG8v/aG91c2Utd2l0aC1m/aXJlLWRhbWFnZS5q/cGc_cz02MTJ4NjEy/Jnc9MCZrPTIwJmM9/LXlZbnU1TFZBZEhL/OUp1Zm9HQ1M2cTNE/RGRPS2JZdGg2UUR3/REtNREYxdz0',
      description: 'Mint condition house that has been passed down through generations of master house keepers. NO LOW BALLING, I know what my house is worth.'
    }),

    new House({
      address: '3232 Gumshoe Rd Caldwell ID',
      size: 2000,
      bedrooms: 4,
      bathrooms: 3,
      year: 2004,
      price: 1200000,
      color: '#14074aff',
      img: 'https://imgs.search.brave.com/Y4u1cDz6OeHV6o0YI3eNv3fRC71yq26FSa1amqXmW_w/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5nZXR0eWltYWdl/cy5jb20vaWQvMTk3/MjQxNTg4NC9waG90/by9ydWlucy1hbmQt/cmVtYWlucy1vZi1h/LWJ1cm5lZC1kb3du/LWhvdXNlLmpwZz9z/PTYxMng2MTImdz0w/Jms9MjAmYz1pOEdt/LXk5eGU0b2Fxc0pf/OWptR1NhRVhkTUlY/M3d3UVlwRjM0Q3BW/VGR3PQ',
      description: 'Big house'
    }),

    new House({
      address: '8923 N Grilltoe St Boise ID',
      size: 1500,
      bedrooms: 3,
      bathrooms: 3,
      year: 1977,
      price: 500000,
      color: '#bc1595ff',
      img: 'https://imgs.search.brave.com/PwP4Bd0UoIdbXT4jl7dJ94VAEmTqjIvBwki3MyX1lgo/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5pc3RvY2twaG90/by5jb20vaWQvOTQw/MjM0NzUvcGhvdG8v/ZmlyZS1kZXZhc3Rh/dGlvbi1vZi1hLWhv/bWUuanBnP3M9NjEy/eDYxMiZ3PTAmaz0y/MCZjPVU3Q2hpYUFh/bzZvdDdZakpuS1pM/dUZkZnBTRHVFVjhf/YnozU3BxRk5XTEE9',
      description: 'This immaculate mansion was built on a native American burial ground and has been awarded the most beautiful house in the west award 3 years in a row. This mansion has been deemed the pearl of Idaho by Times magazine in 2012.'
    }),

    new House({
      address: '8455 Westpark St Boise ID',
      size: 78242,
      bedrooms: 0,
      bathrooms: 2,
      year: 1979,
      price: 5792400,
      color: '#110435ff',
      img: 'https://images1.loopnet.com/i2/IlQuHutqKYAHQ5EdbCSjToKz3Zr1E26sY4NjU-_Fm1E/112/image.jpg',
      description: 'This building was coded entirely in javascript.'
    })
  ]



  cars = [
    new Car({
      make: 'mazda',
      model: 'miata',
      year: 1997,
      mileage: 2000,
      hasCleanTitle: true,
      price: 10000,
      condition: 'like new',
      imgUrl: 'https://images.unsplash.com/photo-1670800811909-7ca3e06fa878?w=1200&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8bWlhdGF8ZW58MHx8MHx8fDI%3D',
      color: '#1375d9',
      horsePower: 80,
      isDrivable: true
    }),
    new Car({
      make: 'chevy',
      model: 'cobalt',
      year: 2007,
      mileage: 200000,
      hasCleanTitle: true,
      price: 5,
      condition: 'ehhh',
      imgUrl: 'https://images.unsplash.com/photo-1714875153033-8e2aabb469ae?w=1200&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fGNoZXZ5JTIwY29iYWx0fGVufDB8fDB8fHwy',
      color: '#2f7992',
      horsePower: 300,
      isDrivable: true
    }),
    new Car({
      make: 'toyota',
      model: 'supra',
      year: 1990,
      mileage: 20000,
      hasCleanTitle: false,
      price: 20000,
      condition: 'fair',
      imgUrl: 'https://images.unsplash.com/photo-1603811478698-0b1d6256f79a?w=1200&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8c3VwcmF8ZW58MHx8MHx8fDI%3D',
      color: '#dbdbdd',
      horsePower: 170,
      isDrivable: true
    }),
    new Car({
      make: 'vw',
      model: 'bug',
      year: 1987,
      mileage: 300000,
      hasCleanTitle: false,
      price: 200,
      condition: 'seen better days',
      imgUrl: 'https://images.unsplash.com/photo-1659536806369-0114c406a20d?w=1200&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTMzfHx2dyUyMGJ1Z3xlbnwwfHwwfHx8Mg%3D%3D',
      color: '#c43d00',
      horsePower: 3,
      isDrivable: false
    }),

  ]
}

export const AppState = createObservableProxy(new ObservableAppState())