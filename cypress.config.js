const { defineConfig } = require('cypress');

module.exports = defineConfig({
  reporter: 'mochawesome', // Reporter para generar reportes JSON y opcionalmente HTML
  reporterOptions: {
    reportDir: 'cypress/reports', // Directorio donde se guardan los reportes
    overwrite: true,
    html: false, // Desactiva la generación de HTML (si solo necesitas JSON)
    json: true,  // Activa la generación de JSON
    reportFilename: 'results', // Nombre del archivo generado
  },
  e2e: {
    baseUrl: 'http://localhost:3000', // URL base de tu aplicación, ajusta según sea necesario
    setupNodeEvents(on, config) {
      // Puedes agregar eventos aquí si lo necesitas
    },
    supportFile: false, // Si no necesitas un archivo de soporte
    specPattern: 'cypress/e2e/**/*.cy.{js,jsx,ts,tsx}', // Patrón de búsqueda de los archivos de prueba
  },
});



