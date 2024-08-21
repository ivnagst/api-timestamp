const express = require("express");
const app = express();
const port = 3000;

app.get("/api", (req, res) => {
  res.json({
    unix: new Date().getTime(),
    utc: new Date().toUTCString(),
  });
});

app.get("/api/:timestamp", (req, res) => {
  const input = req.params.timestamp;

  const date = input ? new Date(input) : new Date();

  // Verifica se a data é válida
  if (isNaN(Number(timestamp)) && timestamp.length === 13) {
    return res.json({
      unix: timestamp,
      utc: new Date(Number(timestamp)).toUTCString(),
    });
  }

  if (new Date(timestamp).toUTCString() !== "Invalid Date") {
    return res.json({
      unix: new Date(timestamp).getTime(),
      utc: timestamp,
    });
  }
  res.send(timestamp);
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
