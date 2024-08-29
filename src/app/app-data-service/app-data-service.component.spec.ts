import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AppDataServiceComponent } from './app-data-service.component';

describe('AppDataServiceComponent', () => {
  let component: AppDataServiceComponent;
  let fixture: ComponentFixture<AppDataServiceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AppDataServiceComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AppDataServiceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
