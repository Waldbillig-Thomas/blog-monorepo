import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AuthorDatailsPageComponent } from './author-datails-page.component';

describe('AuthorDatailsPageComponent', () => {
  let component: AuthorDatailsPageComponent;
  let fixture: ComponentFixture<AuthorDatailsPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AuthorDatailsPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AuthorDatailsPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
