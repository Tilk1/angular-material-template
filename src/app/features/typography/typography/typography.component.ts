import { Component } from '@angular/core';
import { MatLegacyCardModule } from '@angular/material/legacy-card';
import { FlexModule } from '@angular/flex-layout/flex';

@Component({
    selector: 'app-typography',
    templateUrl: './typography.component.html',
    styleUrls: ['./typography.component.css'],
    standalone: true,
    imports: [FlexModule, MatLegacyCardModule]
})
export class TypographyComponent {

  constructor() { }
}
