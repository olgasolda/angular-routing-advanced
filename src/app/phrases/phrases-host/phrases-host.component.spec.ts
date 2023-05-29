import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PhrasesHostComponent } from './phrases-host.component';

describe('PhrasesHostComponent', () => {
  let component: PhrasesHostComponent;
  let fixture: ComponentFixture<PhrasesHostComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PhrasesHostComponent]
    });
    fixture = TestBed.createComponent(PhrasesHostComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
