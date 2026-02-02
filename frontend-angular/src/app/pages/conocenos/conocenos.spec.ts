import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Conocenos } from './conocenos';

describe('Conocenos', () => {
  let component: Conocenos;
  let fixture: ComponentFixture<Conocenos>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Conocenos]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Conocenos);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
