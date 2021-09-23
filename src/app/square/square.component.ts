import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-square',
  template: `
    <button nbButton *ngIf="!value"> {{ value }}</button>
    <button nbButton hero status="success" *ngIf="value == 'X'">{{value}}</button>
    <button nbButton hero status="info" *ngIf="value == 'O'">{{value}}</button>
  `,
  styles: [ 'button { border: 1px gray solid; height: 200px; width:200px; }' ]
})
export class SquareComponent {

  @Input() value!: 'X' | 'O';
  

}
