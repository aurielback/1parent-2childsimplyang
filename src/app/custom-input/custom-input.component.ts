import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Store } from '@ngrx/store';
import { CounterState } from '../counter/state/counter.state';
import { changeMessage, customIncrement, decrement } from '../counter/state/counter.actions';
import { getMessage } from '../counter/state/counter.selectors';

@Component({
  selector: 'app-custom-input',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './custom-input.component.html',
})
export class CustomInputComponent implements OnInit{

  message: string | undefined;
  value: number | undefined;

  constructor(private store: Store<{ counter: CounterState }>) {
  }

  ngOnInit(): void {
    this.store.select(getMessage).subscribe((message) => {
      this.message = message;
    })
  }

  onAdd() {
    this.value ? this.store.dispatch(customIncrement({count: +this.value})) : null;
  }

  changeMessageName() {
    this.store.dispatch(changeMessage({message: this.message}));
  }

}
