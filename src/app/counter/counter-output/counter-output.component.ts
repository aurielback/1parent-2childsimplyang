import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { CounterState } from '../state/counter.state';
import { Observable, Subscription } from 'rxjs';
import { CommonModule } from '@angular/common';
import { getCounter } from '../state/counter.selectors';

@Component({
  selector: 'app-counter-output',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './counter-output.component.html',
})
export class CounterOutputComponent implements OnInit, OnDestroy {

  counterSubscription: Subscription | undefined;
  counter$: Observable<number> | undefined;

  constructor(private store: Store<{ counter: CounterState}>) {
  }

  ngOnDestroy(): void {
    if (this.counterSubscription) {
      this.counterSubscription.unsubscribe();
    }
  }

  ngOnInit(): void {
    this.counter$ = this.store.select(getCounter);
  }
}
