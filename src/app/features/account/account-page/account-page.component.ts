import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { ChangePasswordComponent } from '../change-password/change-password.component';
import { MatLegacyTabsModule } from '@angular/material/legacy-tabs';
import { ProfileDetailsComponent } from '../profile-details/profile-details.component';
import { MatLegacyCardModule } from '@angular/material/legacy-card';
import { FlexModule } from '@angular/flex-layout/flex';

@Component({
    selector: 'app-account-page',
    templateUrl: './account-page.component.html',
    styleUrls: ['./account-page.component.css'],
    standalone: true,
    imports: [FlexModule, MatLegacyCardModule, ProfileDetailsComponent, MatLegacyTabsModule, ChangePasswordComponent]
})
export class AccountPageComponent implements OnInit {

  constructor(private titleService: Title) { }

  ngOnInit() {
    this.titleService.setTitle('angular-material-template - Account');
  }

}
