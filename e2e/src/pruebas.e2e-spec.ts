import { browser, element, by } from "protractor";


describe('prueba e2e',()=>{
    beforeEach(()=>{
        browser.get("HomePage");
    });

    //Comprobación entrada pagina home
    it("se debe mostrar correctamente la pagina home",()=>{
        expect(element(by.css(".ion-padding-vertical ion-label")).getText()).toContain("Bienvenido!");
    });

    //Comprobación pagina recovery
    it("Usuario ingresa a pagina de recuperación", async()=>{
        await element(by.css("[label=¿Olvidó su contraseña?]")).click();
        browser.driver.sleep(500);
        //expect(element(by.id("lost")).getText()).toContain("¿Olvido su contraseña?");
    });

    //Comprobación pagina newuser
    it("Usuario ingresa a pagina de recuperación", async()=>{
        await element(by.css("[page=iniciosesion]")).click();
        browser.driver.sleep(500);
        //expect(element(by.id("lost")).getText()).toContain("¿Nuevo Usuario?");
    });

});