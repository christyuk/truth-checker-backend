const express = require("express");
const cors = require("cors");

const truthRoutes = require("./routes/truth.routes");

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.send("Truth Checker Backend is running ✅");
});

app.use("/api/v1/truth", truthRoutes);

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
