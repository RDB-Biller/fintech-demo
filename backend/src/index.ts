import express from "express";
import paymentRoutes from "./routes/payments";

const app = express();
app.use(express.json());

app.use("/payments", paymentRoutes);

app.get("/", (req, res) => {
  res.send("Fintech Demo Running");
});

app.listen(process.env.PORT || 3000);
