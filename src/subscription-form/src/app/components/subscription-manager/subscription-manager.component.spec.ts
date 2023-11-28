import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SubscriptionManagerComponent } from './subscription-manager.component';

describe('SubscriptionManagerComponent', () => {
  let component: SubscriptionManagerComponent;
  let fixture: ComponentFixture<SubscriptionManagerComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SubscriptionManagerComponent]
    });
    fixture = TestBed.createComponent(SubscriptionManagerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
