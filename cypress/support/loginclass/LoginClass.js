
class LoginClass {
    visitaPagina(url) {
        cy.visit(url);
    }

    setusername(username) {
        cy.get(':nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-input', { timeout: 10000 }).type(username);
    }

    setpassword(password) {
        cy.get(':nth-child(3) > .oxd-input-group > :nth-child(2) > .oxd-input', { timeout: 10000 }).type(password);
    }
}

export default new LoginClass();
