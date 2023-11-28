import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { FormComponent } from './components/form/form.component';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule, Routes } from '@angular/router';
import { SubscriptionManagerComponent } from './components/subscription-manager/subscription-manager.component';
import { ListSubscriptionsComponent } from './components/list-subscriptions/list-subscriptions.component';

const appRoutes: Routes = [
  { path: 'subscription-form', component: FormComponent },
  { path: 'subscription-manager', component: SubscriptionManagerComponent },
  { path: 'list-subscriptions', component: ListSubscriptionsComponent },
  { path: '', redirectTo: '/subscription-manager', pathMatch: 'full' },
];

@NgModule({
  declarations: [
    AppComponent,
    FormComponent,
    SubscriptionManagerComponent,
    ListSubscriptionsComponent,
  ],
  imports: [
    RouterModule.forRoot(appRoutes, { enableTracing: false }),
    BrowserModule,
    ReactiveFormsModule,
    HttpClientModule,
    RouterModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
