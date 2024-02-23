import { Component } from '@angular/core';
import { CounterOutputComponent } from "../counter-output/counter-output.component";
import { CounterButtonsComponent } from "../counter-buttons/counter-buttons.component";

@Component({
    selector: 'app-counter-parent',
    standalone: true,
    templateUrl: './counter-parent.component.html',
    imports: [CounterOutputComponent, CounterButtonsComponent]
})
export class CounterParentComponent {

  counter: number = 0;

  onIncrement() {
    this.counter++;
  }

  onDecrement() {
    this.counter--;
  }

  onReset() {
    this.counter = 0;
  }



}
