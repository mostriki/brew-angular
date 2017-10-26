import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Brew } from './brew.model';

@Component({
  selector: 'edit-brew',
  template: `
    <div>
      <div *ngIf="childSelectedBrew">
        <h3>{{childSelectedBrew.name}}</h3>
        <h3>Edit Brew</h3>
        <label>Enter Brew Name:</label>
        <input [(ngModel)]="childSelectedBrew.name">
        <label>Enter Brew brand:</label>
        <input [(ngModel)]="childSelectedBrew.brand">
        <label>Enter Brew details:</label>
        <input [(ngModel)]="childSelectedBrew.details">
        <label>Enter Brew price:</label>
        <input [(ngModel)]="childSelectedBrew.price">
        <label>Enter Brew ibu:</label>
        <input [(ngModel)]="childSelectedBrew.ibu">
        <label>Enter Brew abv:</label>
        <input [(ngModel)]="childSelectedBrew.abv">
        <label>Enter Brew pints:</label>
        <input [(ngModel)]="childSelectedBrew.pints">
        <button (click)="doneButtonClicked()">Done</button>
        <button (click)="deleteButtonClicked()">Delete</button>
      </div>
    </div>
  `
})

export class EditBrewComponent {
  @Input() childSelectedBrew: Brew;
  @Output() doneButtonClickedSender = new EventEmitter();
  @Output() deleteButtonClickedSender = new EventEmitter();

  doneButtonClicked() {
    this.doneButtonClickedSender.emit();
  }

  deleteButtonClicked() {
    this.deleteButtonClickedSender.emit();
  }
}
