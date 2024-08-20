const express = require("express");
const app = express();
const port = 3000;

app.get("/api/:date?", (req, res) => {
  const input = req.params.date;

  const date = input ? new Date(input) : new Date();

  // Verifica se a data é válida
  if (isNaN(date.getTime())) {
    return res.status(400).json({ error: "Invalid date format" });
  }

  const unixTimestamp = date.getTime();
  const utcDate = date.toUTCString();

  res.json({
    unix: unixTimestamp,
    utc: utcDate,
  });
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
