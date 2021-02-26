import { UserData } from "../../utils/types";
import { Row } from "./user-list.types";

export const mapResultToUsers = (data: any[]) => data.map(datum => ({ ...datum, city: datum.address.city }))

export const HEADER: Row = {
    id: "Id",
    name: "Name",
    username: "Username",
    email: "Email",
    city: "City"
}

export interface UserListProps {
    users: UserData[];
}