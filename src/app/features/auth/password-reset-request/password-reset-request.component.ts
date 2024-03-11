import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { UntypedFormGroup, UntypedFormControl, Validators, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Title } from '@angular/platform-browser';

import { NotificationService } from 'src/app/core/services/notification.service';
import { AuthenticationService } from 'src/app/core/services/auth.service';
import { MatLegacyProgressBarModule } from '@angular/material/legacy-progress-bar';
import { MatLegacyButtonModule } from '@angular/material/legacy-button';
import { NgIf } from '@angular/common';
import { MatLegacyInputModule } from '@angular/material/legacy-input';
import { MatLegacyFormFieldModule } from '@angular/material/legacy-form-field';
import { MatLegacyCardModule } from '@angular/material/legacy-card';
import { FlexModule } from '@angular/flex-layout/flex';

@Component({
    selector: 'app-password-reset-request',
    templateUrl: './password-reset-request.component.html',
    styleUrls: ['./password-reset-request.component.css'],
    standalone: true,
    imports: [FlexModule, FormsModule, ReactiveFormsModule, MatLegacyCardModule, MatLegacyFormFieldModule, MatLegacyInputModule, NgIf, MatLegacyButtonModule, MatLegacyProgressBarModule]
})
export class PasswordResetRequestComponent implements OnInit {

  private email!: string;
  form!: UntypedFormGroup;
  loading!: boolean;

  constructor(private authService: AuthenticationService,
    private notificationService: NotificationService,
    private titleService: Title,
    private router: Router) { }

  ngOnInit() {
    this.titleService.setTitle('angular-material-template - Password Reset Request');

    this.form = new UntypedFormGroup({
      email: new UntypedFormControl('', [Validators.required, Validators.email])
    });

    this.form.get('email')?.valueChanges
      .subscribe((val: string) => { this.email = val.toLowerCase(); });
  }

  resetPassword() {
    this.loading = true;
    this.authService.passwordResetRequest(this.email)
      .subscribe(
        results => {
          this.router.navigate(['/auth/login']);
          this.notificationService.openSnackBar('Password verification mail has been sent to your email address.');
        },
        error => {
          this.loading = false;
          this.notificationService.openSnackBar(error.error);
        }
      );
  }

  cancel() {
    this.router.navigate(['/']);
  }
}
