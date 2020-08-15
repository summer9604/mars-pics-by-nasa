import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MarsPicsComponent } from './mars-pics.component';

describe('MarsPicsComponent', () => {
  let component: MarsPicsComponent;
  let fixture: ComponentFixture<MarsPicsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MarsPicsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MarsPicsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
