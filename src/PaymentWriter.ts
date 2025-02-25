import { CSVWriter } from "./index";

interface Payment {
  id: number;
  amount: number;
  to: string;
  notes: string;
}

const paymentWriter = new CSVWriter<Payment>(["id", "amount", "to", "notes"]);

paymentWriter.addRows([
  { id: 1, amount: 50, to: "bryan", notes: "for design work" },
  {
    id: 2,
    amount: 100,
    to: "sammuel",
    notes: "for monthly allowance",
  },
  {
    id: 3,
    amount: 233,
    to: "owen",
    notes: "for the new Nintendo Switch",
  },
]);

paymentWriter.save("./data/payments.csv");
