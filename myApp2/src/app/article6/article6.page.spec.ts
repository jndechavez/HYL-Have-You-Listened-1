import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Article6Page } from './article6.page';

describe('Article6Page', () => {
  let component: Article6Page;
  let fixture: ComponentFixture<Article6Page>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(Article6Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
