import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Article1Page } from './article1.page';

describe('Article1Page', () => {
  let component: Article1Page;
  let fixture: ComponentFixture<Article1Page>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(Article1Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
