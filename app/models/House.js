import { generateId } from "../utils/GenerateId.js";

export class House {
  constructor(data) {
    this.id = generateId()
    this.address = data.address
    this.size = data.size
    this.bedrooms = data.bedrooms
    this.bathrooms = data.bathrooms
    this.year = data.year
    this.price = data.price
    this.color = data.color
    this.img = data.img
    this.description = data.description || 'Unknown'
    // this.dateListed = data.dateListed
  }

















}





















