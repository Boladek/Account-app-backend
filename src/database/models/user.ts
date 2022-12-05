import { Schema, model } from 'mongoose';
import UserInterface from "../../interfaces/user";

const userSchema = new Schema<UserInterface>(
	{
		first_name: {
			type: String,
			required: true,
		},
		last_name: {
			type: String,
			required: true,
		},
		email: {
			type: String,
			unique: true,
			required: true,
		},
        user_name: {
            type: String,
            unique: true,
            required: true,
        },
		password: {
			type: String,
			required: true,
		},
		phone_number: {
			type: String,
			required: true,
			unique: true,
		},
        role: {
            type: String,
            required: true,
            enum: ["agent", "staff", "admin"],
        }
	},
	{ timestamps: { createdAt: 'created_at', updatedAt: 'updated_at' } },
);

const User = model<UserInterface>('Users', userSchema);


export default User;
