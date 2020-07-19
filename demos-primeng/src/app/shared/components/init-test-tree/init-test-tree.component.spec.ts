import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InitTestTreeComponent } from './init-test-tree.component';

describe('InitTestTreeComponent', () => {
  let component: InitTestTreeComponent;
  let fixture: ComponentFixture<InitTestTreeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InitTestTreeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InitTestTreeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
