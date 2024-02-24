import { Component } from '@angular/core';
import { CounterOutputComponent } from "../counter-output/counter-output.component";
import { CounterButtonsComponent } from "../counter-buttons/counter-buttons.component";
import { CustomInputComponent } from "../custom-input/custom-input.component";

@Component({
    selector: 'app-counter-parent',
    standalone: true,
    templateUrl: './counter-parent.component.html',
    imports: [CounterOutputComponent, CounterButtonsComponent, CustomInputComponent]
})
export class CounterParentComponent {

}
