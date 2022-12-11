interface Agent {
    _id?: string;
    user_name: string;
    phone_number: string;
    location: string;
    balance: number;
    guarantor?: string;
    // terminals: string[];
}

export default Agent;