import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Article5Page } from './article5.page';

describe('Article5Page', () => {
  let component: Article5Page;
  let fixture: ComponentFixture<Article5Page>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(Article5Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
