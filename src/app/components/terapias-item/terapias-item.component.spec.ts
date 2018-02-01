import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TerapiasItemComponent } from './terapias-item.component';

describe('TerapiasItemComponent', () => {
  let component: TerapiasItemComponent;
  let fixture: ComponentFixture<TerapiasItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TerapiasItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TerapiasItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
