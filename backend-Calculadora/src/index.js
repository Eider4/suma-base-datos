const express = require("express");
const cors = require("cors");

const { Conexion_BD } = require("./config/database");

const historialRouter = require("./routes/historial");

const port = 3333;
const app = express();

Conexion_BD();

app.use(express.json());
app.use(cors());

app.get("/", (_, res) => {
  res.send({ res: "hello jdbcskgfvcjsdfb,vblu" });
});

app.use("/historial", historialRouter);

app.listen(port, () => {
  console.log(`http://localhost:${port}`);
});
