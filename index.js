import Stripe from "stripe";
import express from "express";

const secret_key =
  "sk_test_51KkChfKdVmhMFqWjGfryqhs8VX8JwNNW3uPMz31ecK0I3fJIlwQoiaX6M6jekbG0vKiUxvzmfNmCYng8f83qh2DE002oiSkONI";

const stripe = new Stripe(secret_key, {});

const app = express();
const port = process.env.PORT || 3000;

app.get("/api", (req, res) => {
  res.send("API Page");
});

app.post("/create-payment-intent", async (req, res) => {
  const paymentIntent = await stripe.paymentIntents.create({
    amount: 5000,
    currency: "usd",
  });
  res.send({
    ClientSecret: paymentIntent.client_secret,
  });
});

app.listen(port, () => {
  console.log(`App listening on port ${port}`);
});
