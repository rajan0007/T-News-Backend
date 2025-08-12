const express = require("express");
const app = express();
const cors = require("cors");
require("./config/dbConnetion");
const path = require("path");
require("dotenv").config();
// Init Router
const routes = require("./routes");
//

const PORT = process.env.PORT || 5500;
app.use(cors());
// Permission
app.use(express.urlencoded({ extended: false }));
app.use("/public", express.static(path.join(__dirname, "public")));

const corsOpts = {
  origin: "*",

  methods: ["GET", "POST"],

  allowedHeaders: ["Content-Type"],
};

app.use(express.json());

// Routes initialization
routes(app);

// API Health check
app.all("/api/health-check", (req, res) =>
  res.status(200).json({
    status: 200,
    message: `Working Fine`,
  })
);
// Invalid Route
app.all("/api/*", (req, res) =>
  res.status(400).json({ status: 400, message: "Bad Request" })
);

app.listen(PORT, () => {
  console.log(`Server has been started on PORT ${PORT}`);
});
