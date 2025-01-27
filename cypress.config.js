const { defineConfig } = require('cypress');

module.exports = defineConfig({
  reporter: 'mochawesome', // Usa un reporter compatible que genera JSON
  reporterOptions: {
    reportDir: 'cypress/reports', // Directorio donde se guardarán los reportes
    overwrite: true,
    html: false, // Evita generar archivos HTML si no son necesarios
    json: true, // Asegura que se genere un archivo JSON
    reportFilename: 'results', // Nombre del archivo sin extensión
  },
  e2e: {
    setupNodeEvents(on, config) {
      // Puedes agregar eventos aquí si necesitas lógica personalizada
    },
    baseUrl: 'http://localhost:3000', // Asegúrate de que coincida con tu configuración
  },
});


