import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CounterParentComponent } from "./counter/counter-parent/counter-parent.component";

@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.css',
    imports: [RouterOutlet, CounterParentComponent]
})
export class AppComponent {
}
