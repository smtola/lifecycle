import {Component, Input, OnChanges, OnDestroy, OnInit, SimpleChanges} from '@angular/core';

@Component({
  selector: 'app-child',
  template: `
    <p>Showing Here : {{value}} </p>
  `,
  styles: [`
    p{
      margin:1rem 2rem;
      color:white;
    }
  `]
})
export class ChildComponent implements OnInit, OnChanges, OnDestroy{
  @Input() value:string = 'Lifecycle';

  constructor() {
    console.log('constructor has bean called!');
  }

  ngOnInit() {
    console.log('OnInit has been called!');
  }

  ngOnChanges(changes: SimpleChanges) {
    console.log(changes);
  }

  ngOnDestroy() {
    console.log("OnDestroy has been call!.");
  }
}
