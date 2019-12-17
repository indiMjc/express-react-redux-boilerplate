require('dotenv').config();

const server = require('<file path to>server.js');

const PORT = process.env.PORT || 5001;

server.listen(PORT, () => {
  console.log(`\n***Server listening on port ${PORT}***\n`);
});
