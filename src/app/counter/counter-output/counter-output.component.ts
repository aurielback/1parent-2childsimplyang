import { Component, Input, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';

@Component({
  selector: 'app-counter-output',
  standalone: true,
  imports: [],
  templateUrl: './counter-output.component.html',
})
export class CounterOutputComponent implements OnInit{
  counter: number | undefined;
  constructor(private store: Store<{ counter: {counter: number}}>) {

  }
  ngOnInit(): void {
    this.store.select('counter').subscribe(data => {
      this.counter = data.counter;
    })
  }
}
