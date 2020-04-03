import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { RestopagePage } from './restopage.page';

describe('RestopagePage', () => {
  let component: RestopagePage;
  let fixture: ComponentFixture<RestopagePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RestopagePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(RestopagePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
