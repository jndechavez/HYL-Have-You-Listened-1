import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Meditate5Page } from './meditate5.page';

describe('Meditate5Page', () => {
  let component: Meditate5Page;
  let fixture: ComponentFixture<Meditate5Page>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(Meditate5Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
