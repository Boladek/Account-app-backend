import { Schema, model } from "mongoose";
import AccoountInterface from "../../interfaces/account";

const accountSchema = new Schema<AccoountInterface>(
  {
    user_name: {
      type: String,
      required: true,
    },
    agent_id: {
      type: Schema.Types.ObjectId,
      ref: "Agent",
      required: true,
    },
    amount_expected: {
      type: Number,
      required: true,
      min: 0,
    },
    balance: {
      type: Number,
      required: true,
    },
    tickets: {
      type: Number,
      required: true,
      min: 0,
    },
    cash: {
      type: Number,
      required: true,
      min: 0,
    },
  },
  { timestamps: { createdAt: "created_at", updatedAt: "updated_at" } }
);

const Account = model<AccoountInterface>("Accounts", accountSchema);

export default Account;
