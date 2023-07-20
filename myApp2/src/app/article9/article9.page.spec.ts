import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Article9Page } from './article9.page';

describe('Article9Page', () => {
  let component: Article9Page;
  let fixture: ComponentFixture<Article9Page>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(Article9Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
