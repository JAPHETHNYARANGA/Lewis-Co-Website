import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ColaborationPageComponent } from './colaboration-page.component';

describe('ColaborationPageComponent', () => {
  let component: ColaborationPageComponent;
  let fixture: ComponentFixture<ColaborationPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ColaborationPageComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ColaborationPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
