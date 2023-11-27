import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MobileprdctComponent } from './mobileprdct.component';

describe('MobileprdctComponent', () => {
  let component: MobileprdctComponent;
  let fixture: ComponentFixture<MobileprdctComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MobileprdctComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MobileprdctComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
