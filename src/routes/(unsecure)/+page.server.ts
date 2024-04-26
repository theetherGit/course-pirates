import type { Actions, PageServerLoad } from './$types';
import { superValidate } from 'sveltekit-superforms';
import { zod } from 'sveltekit-superforms/adapters';
import { loginSchema } from '$lib/shared/schema/loginSchema';
import { fail } from '@sveltejs/kit';

export const load: PageServerLoad = async ({ request, url, params }) => {
	return {
		loginForm: await superValidate(zod(loginSchema))
	};
};

export const actions: Actions = {
	default: async (event) => {
		const form = await superValidate(event, zod(loginSchema));
		if (!form.valid) {
			return fail(400, {
				form
			});
		}

		// Check for email exist or not
		// If it doesn't exist send error 404
		// If it exists then validate password
		// If password is valid assign token/session cookies
		// If invalid password send 400.

		return {
			form
		};
	}
};
