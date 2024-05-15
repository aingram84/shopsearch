const server = require('./API/server.js');

const port = process.env.PORT || 5000;
server.listen(port, () => {
  console.log(`\n--> ShopSearch Server is running on port ${port} <--\n`);
})