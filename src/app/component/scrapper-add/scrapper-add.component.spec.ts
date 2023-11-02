import {ComponentFixture, TestBed} from '@angular/core/testing';

import {ScrapperAddComponent} from './scrapper-add.component';

describe('ScrapperAddComponent', () => {
  let component: ScrapperAddComponent;
  let fixture: ComponentFixture<ScrapperAddComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ScrapperAddComponent]
    });
    fixture = TestBed.createComponent(ScrapperAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
