import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Subscription } from '../interfaces/subscription.interface';

@Injectable({
  providedIn: 'root',
})
export class SubscriptionBackendService {
  constructor(private http: HttpClient) {}

  createSubscription(sub: Subscription) {
    console.info('Al día de la fecha de realizado este ejercicio, no existe un endpoint para crear el post')
    return this.http.post('api/subscriptions', sub);
  }

  getSubscriptionById(id: number) {
    return this.http.get(`api/subscriptions/${id}`)
  }

  getSubscriptions() {
    return this.http.get(`api/subscriptions/`);
  }

  deleteSubscription(id: number) {
    return this.http.delete(`api/subscriptions/${id}`)
  }

}
