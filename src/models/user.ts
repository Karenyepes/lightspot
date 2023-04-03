import { Role } from "@/models/role"

export interface User {
    id: string
    fullname: string
    email: string
    role: Role | string
}