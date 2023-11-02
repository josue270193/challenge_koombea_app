import {ComponentFixture, TestBed} from '@angular/core/testing';

import {ScrapperListComponent} from './scrapper-list.component';

describe('ScrapperListComponent', () => {
  let component: ScrapperListComponent;
  let fixture: ComponentFixture<ScrapperListComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ScrapperListComponent]
    });
    fixture = TestBed.createComponent(ScrapperListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
