import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { RestotabsPage } from './restotabs.page';

describe('RestotabsPage', () => {
  let component: RestotabsPage;
  let fixture: ComponentFixture<RestotabsPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RestotabsPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(RestotabsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
