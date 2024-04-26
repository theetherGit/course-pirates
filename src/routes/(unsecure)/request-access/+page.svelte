<script lang="ts">
	import { Button } from '$lib/components/ui/button/index.js';
	import * as Card from '$lib/components/ui/card/index.js';
	import { Input } from '$lib/components/ui/input/index.js';
	import { Label } from '$lib/components/ui/label/index.js';
	import { requestAccessSchema } from '$lib/shared/schema/requestAccessSchema';
	import type { PageServerData } from './$types';
	import { superForm } from 'sveltekit-superforms';
	import { zodClient } from 'sveltekit-superforms/adapters';
	import * as Form from '$lib/components/ui/form';

	export let data: PageServerData;

	const requestAccessForm = superForm(data.requestAccessForm, {
		validators: zodClient(requestAccessSchema)
	});

	const { form: formData, enhance } = requestAccessForm;
</script>

<div class="grid h-screen w-full content-center justify-center">
	<Card.Root class="mx-auto max-w-sm">
		<Card.Header>
			<Card.Title class="text-xl tracking-wider">Request an account</Card.Title>
			<Card.Description>Enter your information to request an account for yourself</Card.Description>
		</Card.Header>
		<Card.Content>
			<form method="POST" use:enhance class="grid gap-4">
				<Form.Field form={requestAccessForm} name="name">
					<Form.Control let:attrs>
						<Form.Label>Full Name</Form.Label>
						<Input {...attrs} bind:value={$formData.name} />
					</Form.Control>
					<Form.FieldErrors />
				</Form.Field>

				<Form.Field form={requestAccessForm} name="email">
					<Form.Control let:attrs>
						<Form.Label>Email</Form.Label>
						<Input {...attrs} bind:value={$formData.email} type="email" />
					</Form.Control>
					<Form.FieldErrors />
				</Form.Field>

				<Form.Field form={requestAccessForm} name="password">
					<Form.Control let:attrs>
						<Form.Label>Password</Form.Label>
						<Input {...attrs} bind:value={$formData.password} type="password" />
					</Form.Control>
					<Form.FieldErrors />
				</Form.Field>

				<Button type="submit" class="w-full">Request your account</Button>
			</form>
			<div class="mt-4 text-center text-sm">
				Already have an account?
				<a href="/" class="underline"> Sign in </a>
			</div>
		</Card.Content>
	</Card.Root>
</div>
