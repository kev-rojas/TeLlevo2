import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';
import { element, browser, by } from 'protractor';


import { Pagina2Page } from './pagina2.page';

describe('Pagina2Page', () => {
  let component: Pagina2Page;
  let fixture: ComponentFixture<Pagina2Page>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ Pagina2Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(Pagina2Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it("prueba de agendar viaje", async()=>{
    await element(by.css("[button=Agendar]")).click();
    browser.driver.sleep(500);
    //expect(element(by.css(".ion-padding-vertical ion-button")).getText()).toContain("Agendar");
  });
});