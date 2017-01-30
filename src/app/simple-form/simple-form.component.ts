import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-simple-form',
  template: `
    {{message}}
    <br>
    <input #myInput type="text" [(ngModel)]="message">
    <button (click)="update.emit({text:message})">Click me</button>
    <br>
  `,
  styles: [`
  :host {
    display: flex;
    flex-direction: column;
  }`]
})
export class SimpleFormComponent implements OnInit {

  @Input() message;
  @Output() update = new EventEmitter();

  constructor() {
    //setInterval(() => this.message = Math.random().toString(), 1000);
  }

  ngOnInit() {
  }

}
