import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Store } from '@ngrx/store';
import { CounterState } from '../state/counter.state';
import { changeMessage, customIncrement, decrement } from '../state/counter.actions';
import { getMessage } from '../state/counter.selectors';
import { AppState } from '../../store/app.state';

@Component({
  selector: 'app-custom-input',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './custom-input.component.html',
})
export class CustomInputComponent implements OnInit{

  message: string | undefined;
  value: number | undefined;

  constructor(private store: Store<AppState>) {
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
