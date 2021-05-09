import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchFormateurComponent } from './search-formateur.component';

describe('SearchFormateurComponent', () => {
  let component: SearchFormateurComponent;
  let fixture: ComponentFixture<SearchFormateurComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SearchFormateurComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchFormateurComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
