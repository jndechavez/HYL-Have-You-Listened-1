import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Meditate3Page } from './meditate3.page';

describe('Meditate3Page', () => {
  let component: Meditate3Page;
  let fixture: ComponentFixture<Meditate3Page>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(Meditate3Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
