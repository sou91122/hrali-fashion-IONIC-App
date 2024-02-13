import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { AddresspopComponent } from './addresspop.component';

describe('AddresspopComponent', () => {
  let component: AddresspopComponent;
  let fixture: ComponentFixture<AddresspopComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddresspopComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(AddresspopComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
