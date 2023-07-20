import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Meditate1Page } from './meditate1.page';

describe('Meditate1Page', () => {
  let component: Meditate1Page;
  let fixture: ComponentFixture<Meditate1Page>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(Meditate1Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
