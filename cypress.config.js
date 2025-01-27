const { defineConfig } = require('cypress');

module.exports = defineConfig({
  reporter: 'json',
  reporterOptions: {
    outputFile: 'results.json', // Archivo donde se guardan los resultados
  },
  e2e: {
    setupNodeEvents(on, config) {
      // Aquí puedes añadir eventos personalizados si necesitas
    },
  },
});

