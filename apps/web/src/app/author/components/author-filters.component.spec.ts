import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AuthorFiltersComponent } from './author-filters.component';

describe('AuthorFiltersComponent', () => {
  let component: AuthorFiltersComponent;
  let fixture: ComponentFixture<AuthorFiltersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AuthorFiltersComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AuthorFiltersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
