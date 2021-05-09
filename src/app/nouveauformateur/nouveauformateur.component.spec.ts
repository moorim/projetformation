import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NouveauformateurComponent } from './nouveauformateur.component';

describe('NouveauformateurComponent', () => {
  let component: NouveauformateurComponent;
  let fixture: ComponentFixture<NouveauformateurComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NouveauformateurComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NouveauformateurComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
