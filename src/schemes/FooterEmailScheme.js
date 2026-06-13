import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

export const FooterEmailScheme = z.object({
    email: z.string().email("Invalid Email")
})