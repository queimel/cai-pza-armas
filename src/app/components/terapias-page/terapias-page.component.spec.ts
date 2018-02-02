import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TerapiasPageComponent } from './terapias-page.component';

describe('TerapiasPageComponent', () => {
  let component: TerapiasPageComponent;
  let fixture: ComponentFixture<TerapiasPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TerapiasPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TerapiasPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
