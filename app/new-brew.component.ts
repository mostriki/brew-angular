import { Component, Output, EventEmitter } from '@angular/core';
import { Brew } from './brew.model';

@Component({
  selector: 'new-brew',
  template: `
  <h1>New Brew</h1>
    <div>
      <label>Enter Brew name:</label>
      <input #newName>
      <label>Enter Brew brand:</label>
      <input #newBrand>
      <label>Enter Brew details:</label>
      <input #newDetails>
      <label>Enter Brew price:</label>
      <input #newPrice>
      <label>Enter Brew ibu:</label>
      <input #newIBU>
      <label>Enter Brew abv:</label>
      <input #newABV>
      <label>Enter Brew pints:</label>
      <input #newPints>
     <button (click)="submitForm(newName.value, newBrand.value, newDetails.value, newPrice.value, newIBU.value, newABV.value, newPints.value); newName.value=''; newBrand.value=''; newDetails.value=''; newPrice.value=''; newIBU.value=''; newABV.value=''; newPints.value='';">Add</button>
    </div>
  `
})

export class NewBrewComponent {
  @Output() newBrewSender = new EventEmitter();

  submitForm(name: string, brand: string, details: string, price: number, ibu: number, abv: number, pints: number) {
    let newBrewToAdd: Brew = new Brew(name, brand, details, price, ibu, abv, pints);
    this.newBrewSender.emit(newBrewToAdd);
  }
}
