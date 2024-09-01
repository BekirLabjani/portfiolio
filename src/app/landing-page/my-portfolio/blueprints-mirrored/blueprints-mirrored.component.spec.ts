import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BlueprintsMirroredComponent } from './blueprints-mirrored.component';

describe('BlueprintsMirroredComponent', () => {
  let component: BlueprintsMirroredComponent;
  let fixture: ComponentFixture<BlueprintsMirroredComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BlueprintsMirroredComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(BlueprintsMirroredComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
