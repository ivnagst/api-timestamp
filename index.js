import express from "express";
const app = express();
const port = 3000;
app.get("/api/*", (req, res) => {
    const input = req.params[0];
    const timestamp = Number(input);
    const date = !isNaN(timestamp) && timestamp.toString() === input
        ? new Date(timestamp)
        : new Date(input);
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
