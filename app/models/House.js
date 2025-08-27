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

  get houseTemplate() {
    return `
        <div class="col-md-6">
          <div class="position-relative house-display style="border-color:${this.color};">
            <img class="img-fluid house-img"
              src="${this.img}"
              alt="House picture">
            <h4>${this.address}</h4>
            <p class="m-0">Year: ${this.year}</p>
            <p class="m-0">Size: ${this.size} sqft</p>
            <p class="mb-1">Bedrooms: ${this.bedrooms} Bathrooms: ${this.bathrooms}</p>
            <p>${this.description}</p>
            <div>
              <span class="house-price text-success bg-light px-1">
                ${this.price}
              </span>
            </div>
          </div>
        </div>

    `
  }















}





















