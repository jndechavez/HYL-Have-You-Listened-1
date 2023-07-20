import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Meditate6Page } from './meditate6.page';

describe('Meditate6Page', () => {
  let component: Meditate6Page;
  let fixture: ComponentFixture<Meditate6Page>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(Meditate6Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
