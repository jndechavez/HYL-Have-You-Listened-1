import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Meditate2Page } from './meditate2.page';

describe('Meditate2Page', () => {
  let component: Meditate2Page;
  let fixture: ComponentFixture<Meditate2Page>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(Meditate2Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
