import { Component, OnInit } from '@angular/core';
import { Subscription } from 'src/app/interfaces/subscription.interface';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-list-subscriptions',
  templateUrl: './list-subscriptions.component.html',
  styleUrls: ['./list-subscriptions.component.css'],
})
export class ListSubscriptionsComponent {
  constructor(private http: HttpClient) {}
  subscriptions: Subscription[] = [];

  ngOnInit() {
    this.loadData();
  }

  getData(): Observable<Subscription[]> {
    return this.http.get<Subscription[]>('assets/subscriptions.json');
  }

  loadData() {
    this.getData().subscribe(
      (result) => {
        this.subscriptions = result;
      },
      (error) => console.error('Error al obtener los datos: ', error)
    );
  }
}
