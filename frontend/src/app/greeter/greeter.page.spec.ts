import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { GreeterPage } from './greeter.page';

describe('GreeterPage', () => {
  let component: GreeterPage;
  let fixture: ComponentFixture<GreeterPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GreeterPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(GreeterPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
