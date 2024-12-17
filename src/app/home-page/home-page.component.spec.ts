import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HompePageComponent } from './home-page.component';

describe('HompePageComponent', () => {
  let component: HompePageComponent;
  let fixture: ComponentFixture<HompePageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [HompePageComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HompePageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
