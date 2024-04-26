import * as z from "zod"
export const requestAccessSchema = z.object({
    name: z.string({required_error: 'You have a name? Please use it.'}).min(5, 'Too short').max(200, 'Too long'),
    email: z.string({required_error: 'Email is required to login.'}).email('Invalid email').min(5).max(100),
    password: z.string({required_error: 'Password is required to access your account.'}).min(8, 'You have very small').max(12, 'You got mine.')
})

export type RequestAccessSchema = typeof requestAccessSchema