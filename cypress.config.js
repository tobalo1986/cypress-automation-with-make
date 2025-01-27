const { defineConfig } = require('cypress');

module.exports = defineConfig({
  reporter: 'json', // Usa el reportero JSON predeterminado
  reporterOptions: {
    outputFile: 'results.json', // Guarda el archivo directamente en la raíz del proyecto
  },
  e2e: {
    baseUrl: 'http://localhost:3000', // Ajusta según la URL y el puerto de tu aplicación
    setupNodeEvents(on, config) {
      // Configuración personalizada de eventos si es necesaria
    },
    specPattern: 'cypress/e2e/**/*.cy.{js,jsx,ts,tsx}', // Ruta de las pruebas
  },
});




