import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Meditate8Page } from './meditate8.page';

describe('Meditate8Page', () => {
  let component: Meditate8Page;
  let fixture: ComponentFixture<Meditate8Page>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(Meditate8Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
