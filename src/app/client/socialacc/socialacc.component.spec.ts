import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SocialaccComponent } from './socialacc.component';

describe('SocialaccComponent', () => {
  let component: SocialaccComponent;
  let fixture: ComponentFixture<SocialaccComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SocialaccComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SocialaccComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
