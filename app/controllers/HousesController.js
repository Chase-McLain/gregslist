import { AppState } from "../AppState.js"






export class HouseController {
  constructor() {
    console.log('House controller loaded')
    this.drawHouselistings()
  }

  drawHouselistings() {
    let housedisplay = ''
    AppState.houses.forEach((house) => {
      housedisplay += house.houseTemplate
    })
    const houseDisplayElement = document.getElementById('house-display')
    houseDisplayElement.innerHTML = housedisplay
  }




}








