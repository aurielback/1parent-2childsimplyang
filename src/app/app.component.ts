import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CounterParentComponent } from "./counter/counter-parent/counter-parent.component";
import { HeaderComponent } from "./shared/components/header/header.component";

@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.css',
    imports: [RouterOutlet, CounterParentComponent, HeaderComponent]
})
export class AppComponent {
}
