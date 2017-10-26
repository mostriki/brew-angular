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
        <label>Enter Brew Brand:</label>
        <input [(ngModel)]="childSelectedBrew.brand">
        <label>Enter Brew Details:</label>
        <input [(ngModel)]="childSelectedBrew.details">
        <label>Enter Brew Price:</label>
        <input [(ngModel)]="childSelectedBrew.price">
        <label>Enter Brew IBU:</label>
        <input [(ngModel)]="childSelectedBrew.ibu">
        <label>Enter Brew ABV:</label>
        <input [(ngModel)]="childSelectedBrew.abv">
        <label>Enter Brew Pints:</label>
        <input [(ngModel)]="childSelectedBrew.pints">
        <button class="btn btn-success" (click)="doneButtonClicked()">Done</button>
        <button class="btn btn-danger" (click)="deleteButtonClicked()">Delete</button>
        <button class="btn btn-secondary" (click)="refillButtonClicked()">Refill</button>
      </div>
    </div>
  `
})

export class EditBrewComponent {
  @Input() childSelectedBrew: Brew;
  @Output() doneButtonClickedSender = new EventEmitter();
  @Output() deleteButtonClickedSender = new EventEmitter();
  @Output() refillButtonClickedSender = new EventEmitter();

  doneButtonClicked() {
    this.doneButtonClickedSender.emit();
  }

  deleteButtonClicked() {
    this.deleteButtonClickedSender.emit();
  }

  refillButtonClicked() {
    this.refillButtonClickedSender.emit();
  }
}
