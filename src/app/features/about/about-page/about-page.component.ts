import { Component } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { MatLegacyCardModule } from '@angular/material/legacy-card';
import { FlexModule } from '@angular/flex-layout/flex';

@Component({
    selector: 'app-about-page',
    templateUrl: './about-page.component.html',
    styleUrls: ['./about-page.component.css'],
    standalone: true,
    imports: [FlexModule, MatLegacyCardModule, MatIconModule]
})
export class AboutPageComponent {

  constructor() { }

}
