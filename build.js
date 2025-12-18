const { build } = require('vite');

build().catch(error => {
  console.error(error);
  process.exit(1);
});
