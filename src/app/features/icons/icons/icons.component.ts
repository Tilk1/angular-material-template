import { Component } from '@angular/core';
import { MatLegacyCardModule } from '@angular/material/legacy-card';
import { FlexModule } from '@angular/flex-layout/flex';

@Component({
    selector: 'app-icons',
    templateUrl: './icons.component.html',
    styleUrls: ['./icons.component.css'],
    standalone: true,
    imports: [FlexModule, MatLegacyCardModule]
})
export class IconsComponent {

  constructor() { }
}
