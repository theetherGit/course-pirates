import { superValidate } from 'sveltekit-superforms';
import type { Actions, PageServerLoad } from './$types';
import { requestAccessSchema } from '$lib/shared/schema/requestAccessSchema';
import { zod } from 'sveltekit-superforms/adapters';
import { fail } from '@sveltejs/kit';

export const load: PageServerLoad = async ({ request, url, params }) => {
	return {
		requestAccessForm: await superValidate(zod(requestAccessSchema))
	};
};

export const actions: Actions = {
	default: async (event) => {
		const form = await superValidate(event, zod(requestAccessSchema));
		if (!form.valid) {
			return fail(400, {
				form
			});
		}

		// if email exist in database then error 400 email exists
		// if not exist then hash the password and save it to db

		return {
			form
		};
	}
};
