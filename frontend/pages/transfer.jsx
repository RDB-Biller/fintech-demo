import { useState } from "react";
import axios from "axios";

export default function Transfer() {
  const [amount, setAmount] = useState("");

  const send = async () => {
    const res = await axios.post(
      process.env.NEXT_PUBLIC_API,
      {
        amount,
        type: "BANK"
      }
    );

    console.log(res.data);
  };

  return (
    <div>
      <h2>Send Money</h2>

      <input onChange={(e) => setAmount(e.target.value)} />

      <button onClick={send}>Send</button>
    </div>
  );
}
