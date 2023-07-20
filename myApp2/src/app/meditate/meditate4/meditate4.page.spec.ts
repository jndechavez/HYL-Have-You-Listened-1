import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Meditate4Page } from './meditate4.page';

describe('Meditate4Page', () => {
  let component: Meditate4Page;
  let fixture: ComponentFixture<Meditate4Page>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(Meditate4Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
