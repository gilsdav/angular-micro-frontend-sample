/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { CoucouComponent } from './coucou.component';

describe('CoucouComponent', () => {
  let component: CoucouComponent;
  let fixture: ComponentFixture<CoucouComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CoucouComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CoucouComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
