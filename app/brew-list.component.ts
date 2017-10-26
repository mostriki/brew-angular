import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Brew } from './brew.model';

@Component({
  selector: 'brew-list',
  template: `
    <div *ngFor="let currentBrew of childBrewList">
      <h2>{{currentBrew.name}} <button class="btn btn-primary" (click)="pourPint(currentBrew)">Pour Pint</button><button class="btn btn-success" (click)="pourGrowler(currentBrew)">Pour Growler</button></h2><br>
      <h3>{{currentBrew.brand}}</h3>
      <h3>{{currentBrew.details}}</h3>
      <h3>Price: {{currentBrew.price}}</h3>
      <h3>Ibu: {{currentBrew.ibu}}</h3>
      <h3>Abv: <span [class]="priorityColor(currentBrew)">{{currentBrew.abv}}</span></h3>
      <div class="progress">
        <div [class]="progressBarColor(currentBrew)" role="progressbar" [style.width]="progressBarPercent(currentBrew)" aria-valuenow="0" aria-valuemin="0" aria-valuemax="100">Pints: {{currentBrew.pints}}</div>
      </div>
      <br>
      <h3><button class="btn btn-warning"(click)="editButtonHasBeenClicked(currentBrew)">Edit!</button></h3><br>
    </div>
  `
})

export class BrewListComponent {
  @Input() childBrewList: Brew[];
  @Output() clickSender = new EventEmitter();

  editButtonHasBeenClicked(brewToEdit: Brew) {
    this.clickSender.emit(brewToEdit);
  }

  pourPint(brewToEdit: Brew) {
    brewToEdit.pints -= 1;
  }

  pourGrowler(brewToEdit: Brew) {
    brewToEdit.pints -= 2;
  }

  priorityColor(currentBrew){
    if (currentBrew.abv <= 3){
      return "text-info";
    } else if (currentBrew.abv > 3 && currentBrew.abv <= 7) {
      return  "text-warning";
    } else {
      return "text-danger";
    }
  }

  progressBarColor(currentBrew){
    console.log("OnTest" + currentBrew.pints)
    if (currentBrew.pints <= 10){
      console.log("1: " + currentBrew.pints);
      return "progress-bar bg-danger";
    } else if (currentBrew.pints > 10 && currentBrew.pints <= 62) {
      console.log("2: " + currentBrew.pints);
      return  "progress-bar bg-warning";
    } else if (currentBrew.pints > 62) {
      console.log("3: " + currentBrew.pints);
      return "progress-bar bg-success";
    }
  }

  progressBarPercent(currentBrew){
    return `${currentBrew.pints/124 * 100}%`;
  }
}
