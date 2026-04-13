export async function sendSGB(amount) {
  return {
    provider: "SGB",
    status: "SIMULATED_SUCCESS",
    amount
  };
}
