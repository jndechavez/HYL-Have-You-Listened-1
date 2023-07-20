import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Article8Page } from './article8.page';

describe('Article8Page', () => {
  let component: Article8Page;
  let fixture: ComponentFixture<Article8Page>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(Article8Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
