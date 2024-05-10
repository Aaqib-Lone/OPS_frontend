import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TabulardataComponent } from './tabulardata.component';

describe('TabulardataComponent', () => {
  let component: TabulardataComponent;
  let fixture: ComponentFixture<TabulardataComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TabulardataComponent]
    });
    fixture = TestBed.createComponent(TabulardataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
