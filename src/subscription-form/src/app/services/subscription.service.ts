import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class SubscriptionService {
  constructor() {}

  process(data: Object) {
    console.log(data);
  }
}
