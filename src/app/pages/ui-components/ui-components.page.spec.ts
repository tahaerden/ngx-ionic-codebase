import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { UiComponentsPage } from './ui-components.page';

describe('UiComponentsPage', () => {
  let component: UiComponentsPage;
  let fixture: ComponentFixture<UiComponentsPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UiComponentsPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(UiComponentsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
