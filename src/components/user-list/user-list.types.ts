import { UserData } from "../../utils/types";

export interface Row {
    id: string,
    name: string,
    username: string,
    city: string,
    email: string
}

export interface RowProps {
    user: UserData;
}