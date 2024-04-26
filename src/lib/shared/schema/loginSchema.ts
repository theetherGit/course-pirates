import * as z from "zod";

export const loginSchema = z.object({
    email: z.string({required_error: 'Email is required to login.'}).email('Invalid email').min(5).max(100),
    password: z.string({required_error: 'Password is required to access your account.'}).min(8, 'You have very small').max(12, 'You got mine.')
})

export type LoginSchema = typeof loginSchema