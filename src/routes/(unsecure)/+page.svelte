<script lang="ts">
	import type { PageServerData } from './$types';
	import { Button } from '$lib/components/ui/button/index.js';
	import * as Card from '$lib/components/ui/card/index.js';
	import { Input } from '$lib/components/ui/input/index.js';
	import { Label } from '$lib/components/ui/label/index.js';
	import { superForm } from 'sveltekit-superforms';
	import { zodClient } from 'sveltekit-superforms/adapters';
	import { loginSchema } from '$lib/shared/schema/loginSchema';
	import * as Form from '$lib/components/ui/form';

	export let data: PageServerData;

	const loginForm = superForm(data.loginForm, {
		validators: zodClient(loginSchema)
	});

	const { form: formData, enhance } = loginForm;
</script>

<div class="grid h-screen w-full content-center justify-center">
	<Card.Root class="mx-auto max-w-sm">
		<Card.Header>
			<Card.Title class="text-2xl">Login</Card.Title>
			<Card.Description>Enter your email below to login to your account</Card.Description>
		</Card.Header>
		<Card.Content>
			<form method="POST" use:enhance class="grid gap-4">
				<Form.Field form={loginForm} name="email">
					<Form.Control let:attrs>
						<Form.Label>Email</Form.Label>
						<Input {...attrs} bind:value={$formData.email} type="email" />
					</Form.Control>
					<Form.FieldErrors />
				</Form.Field>
				<Form.Field form={loginForm} name="password">
					<Form.Control let:attrs>
						<div class="flex items-center">
							<Form.Label for="password">Password</Form.Label>
							<a href="##" class="ml-auto inline-block text-sm underline">
								Forgot your password?
							</a>
						</div>
						<Input {...attrs} bind:value={$formData.password} type="password" />
					</Form.Control>
					<Form.FieldErrors />
				</Form.Field>
				<Button type="submit" class="w-full">Login</Button>
			</form>
			<div class="mt-4 text-center text-sm">
				Do you know us?
				<a href="/request-access" class="underline">Request Access</a>
			</div>
		</Card.Content>
	</Card.Root>
</div>
