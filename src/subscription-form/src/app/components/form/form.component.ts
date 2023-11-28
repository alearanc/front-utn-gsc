import { Component } from '@angular/core';
import { FormBuilder, FormControl, Validators } from '@angular/forms';
import { matchEmail } from '../../shared/email.validator';
import { SubscriptionService } from '../../services/subscription.service';
import { SubscriptionBackendService } from '../../services/subscription-backend.service';
import { Subscription } from '../../interfaces/subscription.interface';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css'],
})
export class FormComponent {
  constructor(private fb: FormBuilder, private sc: SubscriptionService, private sbs: SubscriptionBackendService) {}
  title = 'Formulario de suscripción'
  maxNameLength = 20;
  passwordLength = 4;
  phoneLength = 10;
  proxId = 0;
  subscriptionForm = this.fb.group(
    {
      id: this.proxId,
      firstName: ['', [Validators.required, Validators.maxLength(this.maxNameLength)]],
      lastName: ['', [Validators.required, Validators.maxLength(this.maxNameLength)]],
      email: ['', [Validators.required, Validators.email]],
      confirmEmail: ['', [Validators.required, Validators.email]],
      phone: [
        '',
        [Validators.required, Validators.minLength(this.phoneLength), Validators.maxLength(this.phoneLength)],
      ],
      password: [
        '',
        [Validators.required, Validators.minLength(this.passwordLength)],
      ],
      notifications: [ , [Validators.required]],
      terms: ['', [Validators.requiredTrue]],
    },
    { validators: matchEmail }
  );

  createSubscription() {
    this.proxId++;
    this.sbs.createSubscription(this.subscriptionForm.value).subscribe({
      next: (res) => {console.log(res)},
      error: (err) => {console.log(err)}
    });
  }

  get firstName() {
    return this.subscriptionForm.get('firstName') as FormControl;
  }
  get lastName() {
    return this.subscriptionForm.get('lastName') as FormControl;
  }
  get email() {
    return this.subscriptionForm.get('email') as FormControl;
  }
  get confirmEmail() {
    return this.subscriptionForm.get('confirmEmail') as FormControl;
  }
  get phone() {
    return this.subscriptionForm.get('phone') as FormControl;
  }
  get password() {
    return this.subscriptionForm.get('password') as FormControl;
  }
  get notifications() {
    return this.subscriptionForm.get('notifications') as FormControl;
  }
  get terms() {
    return this.subscriptionForm.get('terms') as FormControl;
  }
}
