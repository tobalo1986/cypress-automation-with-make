const { defineConfig } = require('cypress');

module.exports = defineConfig({
  reporter: 'json', // Utiliza el reportero JSON predeterminado
  reporterOptions: {
    outputFile: 'results.json', // Nombre del archivo de salida (en la raíz del proyecto)
  },
  e2e: {
    baseUrl: 'http://localhost:3000', // Cambia al URL y puerto donde se ejecuta tu aplicación
    setupNodeEvents(on, config) {
      // Lugar para personalizar eventos si es necesario
    },
    specPattern: 'cypress/e2e/**/*.cy.{js,jsx,ts,tsx}', // Define el patrón de búsqueda de pruebas
  },
});

