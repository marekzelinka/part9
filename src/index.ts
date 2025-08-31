import express from "express";
import { calculator, type Operation } from "./utils.ts";

const app = express();
const PORT = process.env.PORT || 3003;

app.get("/ping", (_req, res) => {
  res.send("pong");
});

app.post("/calculate", (req, res) => {
  // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
  const { value1, value2, op } = req.body;

  const a = Number(value1);
  const b = Number(value2);
  const operation = op as Operation;
  const result = calculator(a, b, operation);

  res.send({ result });
});

app.listen(PORT, () => {
  console.log(`🚀 Server running on port ${PORT}`);
});
