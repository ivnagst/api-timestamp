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
  const timestamp = req.params.timestamp;

  let date;

  // Check if the timestamp is a number
  if (!isNaN(Number(timestamp))) {
    date = new Date(Number(timestamp));
  } else {
    date = new Date(timestamp);
  }

  if (date.toUTCString() === "Invalid Date") {
    return res.status(400).json({ error: "Invalid Date" });
  }

  res.json({
    unix: date.getTime(),
    utc: date.toUTCString(),
  });
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
