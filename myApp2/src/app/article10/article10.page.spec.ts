import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Article10Page } from './article10.page';

describe('Article10Page', () => {
  let component: Article10Page;
  let fixture: ComponentFixture<Article10Page>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(Article10Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
