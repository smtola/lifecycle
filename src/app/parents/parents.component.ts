import { Component } from '@angular/core';

@Component({
  selector: 'app-parents',
  template: `
    <div class="container">
      <div>
        <input type="text" placeholder="Typing..." #input>
        <button (click)="onSubmit(input)">Click Me</button>
      </div>
      <app-child [value]="inputText" *ngIf="destroy"></app-child>
      <button (click)="destroyEvent()">Destroy</button>
    </div>

  `,
  styles: [`
    .container{
      display: grid;
      justify-content: center;
      align-items: center;
      background-color: #9ec5fe;
      margin-top: 3rem;
    }
    input[type="text"]{
      margin:1rem 2rem;
      padding:10px 1rem;
      outline:none;
      border:none;
    }
  `]
})
export class ParentsComponent {

  inputText:string = '';
  onSubmit(inputE:HTMLInputElement){
    this.inputText = inputE.value;
  }

  destroy:boolean = true;
  destroyEvent()
  {
    this.destroy = false;
  }
}
