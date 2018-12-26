const db = require('./db/database.js');

const app = require('./index.js');
const port = process.env.PORT || 3000;

db.sync() // sync our database
  .then(function() {
    app.listen(port); // then start listening with our express server once we have synced
  });
