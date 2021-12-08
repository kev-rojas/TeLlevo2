import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { HomePage } from './home.page';

describe('HomePage', () => {
  let component: HomePage;
  let fixture: ComponentFixture<HomePage>;
  let llevoServiceSpy;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ HomePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    component = TestBed.inject(HomePage);

    fixture = TestBed.createComponent(HomePage);
    component = fixture.componentInstance;
    fixture.detectChanges();

    llevoServiceSpy = jasmine.createSpyObj('Usuario', {
      usario: 'Kevin Rojas',
      contraseña: 'rojas' 
    })

    //component = new HomePage(llevoServiceSpy);

  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });

    /*it('iPrueba ingreso de usuario',
    inject([llevoServiceSpy], (llevoServiceSpy)=>{
      expect(component).toBeTruthy();
    }));*/
});
