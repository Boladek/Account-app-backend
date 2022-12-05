interface Agent {
    _id?: string;
    user_name: string;
    phone_number: string;
    location: string;
    balance: number;
    user_id: any;
    terminals: string[];
}

export default Agent;