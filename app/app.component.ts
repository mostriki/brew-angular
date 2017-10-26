import { Component } from '@angular/core';
import { Brew } from './brew.model';

@Component({
  selector: 'app-root',
  template: `
  <div class="container">
    <h1>To Do List for {{month}}/{{day}}/{{year}}</h1>
    <h3>{{currentFocus}}</h3>
    <brew-list [childBrewList]="masterBrewList" (clickSender)="editBrew($event)"></brew-list>
    <edit-brew [childSelectedBrew]="selectedBrew" (doneButtonClickedSender)="finishedEditing()" (deleteButtonClickedSender)="deleteBrew()" (refillButtonClickedSender)="refillKeg()"></edit-brew>
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
    new Brew('Breakside IPA', 'Breakside Brewery', 'Classic craft beer of the Pacific Northwest. Notes of evergreen, citrus and tropical fruit.', 4, 74, 6.2, 124),
    new Brew('Urban Farmhouse Ale', 'The Commons Brewery', 'Urban Farmhouse Ale is a light, crisp and refreshing farmhouse ale.', 8, 30, 5.3, 124),
    new Brew('Krampus Cranberry', 'Wildcraft Cider Works', 'Imperial  cider, with Cranberries & Juniper ', 5, 0, 9, 124),
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

  deleteBrew() {
    let index = this.masterBrewList.indexOf(this.selectedBrew);
    this.masterBrewList.splice(index, 1);
  }

  refillKeg() {
    let index = this.masterBrewList.indexOf(this.selectedBrew);
    this.masterBrewList[index].pints = 124;
  }
}
