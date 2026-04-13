import express from "express";
import { sendMTN } from "../services/mtn";
import { sendSGB } from "../services/sgb";
import { buildISOMessage } from "../services/iso20022";

const router = express.Router();

router.post("/", async (req, res) => {
  const { amount, type } = req.body;

  // ISO 20022 MESSAGE
  const iso = buildISOMessage({
    amount,
    debtor: "DemoUser",
    creditor: "Receiver"
  });

  let result;

  if (type === "MOMO") {
    result = await sendMTN(amount);
  } else {
    result = await sendSGB(amount);
  }

  res.json({
    iso_message: iso,
    provider_response: result
  });
});

export default router;
