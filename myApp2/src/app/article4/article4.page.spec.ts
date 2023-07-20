import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Article4Page } from './article4.page';

describe('Article4Page', () => {
  let component: Article4Page;
  let fixture: ComponentFixture<Article4Page>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(Article4Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
