const vite = require('vite');

vite.build().catch(error => {
  console.error(error);
  process.exit(1);
});
