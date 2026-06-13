import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

export const RegisterScheme = z.object({
    email: z.string().email("Invalid email"),
    password: z.string().min(10, "Minimum 10 characters")
})