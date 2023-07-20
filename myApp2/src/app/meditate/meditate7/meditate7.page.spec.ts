import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Meditate7Page } from './meditate7.page';

describe('Meditate7Page', () => {
  let component: Meditate7Page;
  let fixture: ComponentFixture<Meditate7Page>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(Meditate7Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
