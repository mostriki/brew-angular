import { Component } from '@angular/core';
import { Brew } from './brew.model';

@Component({
  selector: 'app-root',
  template: `
  <div class="container">
    <h1>To Do List for {{month}}/{{day}}/{{year}}</h1>
    <h3>{{currentFocus}}</h3>
    <brew-list [childBrewList]="masterBrewList"></brew-list>
    <new-brew (newBrewSender)="addBrew($event)"></new-brew>
  </div>
  `
})

export class AppComponent {
  currentTime = new Date();
  month: number = this.currentTime.getMonth() + 1;
  day: number = this.currentTime.getDate();
  year: number = this.currentTime.getFullYear();
  selectedBrew = null;

  masterBrewList: Brew[] = [
    new Brew('Breakside IPA', 'Classic craft beer of the Pacific Northwest. Notes of evergreen, citrus and tropical fruit.', 'Breakside Brewery', 4, 74, 6.2, 124),
    new Brew('Urban Farmhouse Ale', 'Urban Farmhouse Ale is a light, crisp and refreshing farmhouse ale.', 'The Commons Brewery', 8, 30, 5.3, 124),
    new Brew('Krampus Cranberry', 'Imperial  cider, with Cranberries & Juniper ', 'Wildcraft Cider Works', 5, 0, 9, 124),
  ];

  editBrew(clickedBrew) {
    this.selectedBrew = clickedBrew;
  }

  finishedEditing() {
    this.selectedBrew = null;
  }

  addBrew(newBrewFromChild: Brew) {
    this.masterBrewList.push(newBrewFromChild);
  }

}
