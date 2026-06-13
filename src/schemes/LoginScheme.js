import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

export const LoginScheme = z.object({
    firstName: z.string().max(20, ""),
    lastName: z.string().max(20, ""),
    email: z.string().email("Invalid email"),
    password: z.string().min(10, "Minimum 10 characters")
})