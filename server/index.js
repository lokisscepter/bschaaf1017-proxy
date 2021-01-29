const express = require('express');
const cors = require('cors');

const PORT = 4040;

const app = express();
app.use(cors());
app.use(express.static('public'));

app.listen(PORT, () => {
  console.log('listening on port ' + PORT);
});