import { TestBed } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { By } from '@angular/platform-browser';

describe('AppComponent', () => {
  beforeEach(() => TestBed.configureTestingModule({
    declarations: [AppComponent]
  }));

  it('title should be H3 element', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const h3 = fixture.debugElement.query(By.css('h3')).nativeElement;
    expect(h3).toBeTruthy();
  });




});
