import express from "express";
import cors from "cors";

const app = express();

app.use(cors());
app.use(express.json());


app.get("/api/health", (req, res) => {
    res.status(200).json({ message: "OK" });
})


app.listen(3000, () => {
    console.log("API listening on port 3000");
})