import express from "express";
import cors from "cors";

const app = express();

/* =======================
   MIDDLEWARE
======================= */
app.use(cors());
app.use(express.json());

/* =======================
   ROOT ROUTE (REQUIRED)
======================= */
app.get("/", (req, res) => {
  res.send("Truth Checker Backend is running ✅");
});

/* =======================
   API HEALTH CHECK
======================= */
app.get("/api", (req, res) => {
  res.json({
    success: true,
    message: "API working (no database)",
  });
});

/* =======================
   MAIN API ENDPOINT
======================= */
app.post("/api/check", (req, res) => {
  const { text } = req.body;

  res.json({
    success: true,
    input: text,
    result: "This is a demo response (no database used)",
  });
});

/* =======================
   SERVER START
======================= */
const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
