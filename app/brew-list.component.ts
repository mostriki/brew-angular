import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Brew } from './brew.model';

@Component({
  selector: 'brew-list',
  template: `
    <ul>
      <li *ngFor="let currentBrew of childBrewList">Name: {{currentBrew.name}}<br>
      Brand: {{currentBrew.brand}}<br>
      Description: {{currentBrew.details}}<br>
      Price: {{currentBrew.price}}<br>
      Ibu: {{currentBrew.ibu}}<br>
      Abv: {{currentBrew.abv}}<br>
      Pints: {{currentBrew.pints}}<br>
      </li>
    </ul>
  `
})

export class BrewListComponent {
  @Input() childBrewList: Brew[];
  @Output() clickSender = new EventEmitter();
}
