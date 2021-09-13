import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AuthorUpdatePageComponent } from './author-update-page.component';

describe('AuthorUpdatePageComponent', () => {
  let component: AuthorUpdatePageComponent;
  let fixture: ComponentFixture<AuthorUpdatePageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AuthorUpdatePageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AuthorUpdatePageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
