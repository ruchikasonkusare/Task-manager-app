const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.send("API Running...");
});

const swaggerUi = require("swagger-ui-express");
const swaggerSpec = require("./config/swagger");

app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerSpec));

const authRoutes = require("./routes/authRoutes");

app.use("/api/v1/auth", authRoutes);

const taskRoutes = require("./routes/taskRoutes");

app.use("/api/v1/tasks", taskRoutes);

const { errorHandler } = require("./middleware/errorMiddleware");

app.use(errorHandler);

module.exports = app;