
import LoginClass from '../support/loginclass/LoginClass.js';


describe('prueba test', () => {
    it('login test error contraseña', () => {
        cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
        cy.get(':nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-input', { timeout: 10000 }).type('Admin');
        cy.get(':nth-child(3) > .oxd-input-group > :nth-child(2) > .oxd-input', { timeout: 10000 }).type('admin124');
        cy.get('.oxd-button', { timeout: 10000 }).click();
        cy.get('.oxd-alert').contains('Invalid credentials');
    });

    it('login test error usuario', () => {
        cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
        cy.get(':nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-input', { timeout: 10000 }).type('Admin23');
        cy.get(':nth-child(3) > .oxd-input-group > :nth-child(2) > .oxd-input', { timeout: 10000 }).type('admin123');
        cy.get('.oxd-button', { timeout: 10000 }).click();
        cy.get('.oxd-alert').contains('Invalid credentials');
    });

    it('rellenar nombre de empleado', () => {
        cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
        cy.get(':nth-child(6) > .oxd-main-menu-item > .oxd-text').click(); // <- typo corregido
        cy.get('.--name-grouped-field > :nth-child(1) > :nth-child(2) > .oxd-input').type('Rodolfo');
    });

    it('prueba con pom', () => {
        LoginClass.visitaPagina('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login'); // <- nombre corregido
        LoginClass.setusername('Admin');
        LoginClass.setpassword('admin123');
    });
});

        




