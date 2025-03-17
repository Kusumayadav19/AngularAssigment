import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PutAppComponent } from './put-app.component';

describe('PutAppComponent', () => {
  let component: PutAppComponent;
  let fixture: ComponentFixture<PutAppComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PutAppComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PutAppComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
