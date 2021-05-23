// LOAD DATA
// Linking our routes to a series of "data" sources.

const notesData = require('../data/notesData');

// ROUTING

module.exports = (app) => {

  app.get('/api/notes', (req, res) => res.json(notesData));

  // API POST Requests
  // Below code handles when a user submits a form and thus submits data to the server.
  // In each of the below cases, when a user submits form data (a JSON object)
  // ...the JSON is pushed to the appropriate JavaScript array
  // (ex. User fills out a reservation request... this data is then sent to the server...
  // Then the server saves the data to the tableData array)
  // ---------------------------------------------------------------------------

  app.post('/api/notes', (req, res) => {
      notesData.push(req.body);
      res.json(true);
  });

  app.post('/api/clear', (req, res) => {
    // Empty out the arrays of data
    notesData.length = 0;
    res.json({ ok: true });
  });

};