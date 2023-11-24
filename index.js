const express = require('express')
const app = express()
const PORT = process.env.PORT || 3000;
app.get('/', function (req, res) {
  res.send('Jai Shree Ram')
})

app.listen(PORT, function() {
    console.log("App running on port" + PORT);
  });
