import { Schema, model } from 'mongoose';
import AgentInterface from "../../interfaces/agent";

const agentSchema = new Schema<AgentInterface>(
	{
        user_name: {
            type: String,
            unique: true,
            required: true,
        },
		phone_number: {
			type: String,
			required: true,
			unique: true,
		},
        location: {
			type: String,
			required: true,
		},
        user_id: {
            type: Schema.Types.ObjectId,
            ref: "User",
            required: true,
        },
        balance: {
            type: Number,
            required: true,
        },
        terminals: {
            type: [String],
            required: true,
        }
	},
	{ timestamps: { createdAt: 'created_at', updatedAt: 'updated_at' } },
);

const Agent = model<AgentInterface>('Agents', agentSchema);


export default Agent;
