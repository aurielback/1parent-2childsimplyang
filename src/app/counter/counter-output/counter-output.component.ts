import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-counter-output',
  standalone: true,
  imports: [],
  templateUrl: './counter-output.component.html',
})
export class CounterOutputComponent {


  @Input()
  counter: number = 0;

}
