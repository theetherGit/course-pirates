<script lang="ts">
	import {Bookmark, BookmarkCheck, FolderOpenDot, Gauge, ListChecks, Play, PlayCircle} from 'lucide-svelte';
	import * as Card from '$lib/components/ui/card/index.js';
	import {Button} from "$lib/components/ui/button";

	const currentTime = new Date().getHours()
</script>

<div class="flex flex-col space-y-8">
	<div class="text-2xl space-y-4">
		<h2>
			{#if 5 < currentTime && currentTime < 12}
				Good Morning,
			{:else if 12 < currentTime && currentTime < 17}
				Good Afternoon,
			{:else if 17 < currentTime && currentTime < 22}
				Good Evening,
			{:else}
				Good Night,
			{/if}
			<span class="font-bold"> Name </span>
		</h2>
		<div class="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
			<Card.Root>
				<Card.Header class="flex flex-row items-center justify-between space-y-0 pb-2">
					<Card.Title class="text-sm font-medium">In Progress</Card.Title>
					<Gauge class="h-4 w-4 text-muted-foreground" />
				</Card.Header>
				<Card.Content>
					<div class="text-2xl font-bold">2</div>
				</Card.Content>
			</Card.Root>

			<Card.Root>
				<Card.Header class="flex flex-row items-center justify-between space-y-0 pb-2">
					<Card.Title class="text-sm font-medium">Bookmarks</Card.Title>
					<BookmarkCheck class="h-4 w-4 text-muted-foreground" />
				</Card.Header>
				<Card.Content>
					<div class="text-2xl font-bold">7</div>
				</Card.Content>
			</Card.Root>

			<Card.Root>
				<Card.Header class="flex flex-row items-center justify-between space-y-0 pb-2">
					<Card.Title class="text-sm font-medium">Completed Courses</Card.Title>
					<ListChecks class="h-4 w-4 text-muted-foreground" />
				</Card.Header>
				<Card.Content>
					<div class="text-2xl font-bold">10</div>
				</Card.Content>
			</Card.Root>
		</div>
	</div>

	<div class="space-y-4">
		<h2 class="text-2xl">Continue Learning</h2>
		<div class="grid grid-cols-1 gap-4 md:grid-cols-2 xl:grid-cols-3 overflow-hidden">
			<Card.Root class="overflow-hidden">
				<Card.Header class="p-0 overflow-hidden">
					<img
						src="https://images.unsplash.com/photo-1496281955129-ad3ba33b7591?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
						alt="video-banner"
						class="object-contain rounded-lg hover:scale-105 transition-all duration-500"
					/>
				</Card.Header>
				<Card.Content class="px-3 pb-3 space-y-2">
					<div class="grid grid-cols-4 my-3 items-center">
						<div class="col-span-3 font-medium tracking-wide">
							Chillin' in Another World with Level 2 Super Cheat Powers
						</div>
						<div class="col-span-1 opacity-50 text-sm justify-self-end place-self-end">
							4:00 Min
						</div>
					</div>
					<Button class="flex flex-row items-center w-full tracking-wide">
						<Play class="h-4 w-4 mr-2" />
						Continue Learning
					</Button>
				</Card.Content>
			</Card.Root>
			<Card.Root class="overflow-hidden">
				<Card.Header class="p-0 overflow-hidden">
					<img
						src="https://images.unsplash.com/photo-1496281955129-ad3ba33b7591?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
						alt="video-banner"
						class="object-contain rounded-lg hover:scale-105 transition-all duration-500"
					/>
				</Card.Header>
				<Card.Content class="px-3 pb-3 space-y-2">
					<div class="grid grid-cols-4 my-3 items-center">
						<div class="col-span-3 font-medium tracking-wide">
							Chillin' in Another World with Level 2 Super Cheat Powers
						</div>
						<div class="col-span-1 opacity-50 text-sm justify-self-end place-self-end">
							4:00 Min
						</div>
					</div>
					<Button class="flex flex-row items-center w-full tracking-wide">
						<Play class="h-4 w-4 mr-2" />
						Continue Learning
					</Button>
				</Card.Content>
			</Card.Root>
			<Card.Root class="overflow-hidden">
				<Card.Header class="p-0 overflow-hidden">
					<img
						src="https://images.unsplash.com/photo-1496281955129-ad3ba33b7591?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
						alt="video-banner"
						class="object-contain rounded-lg hover:scale-105 transition-all duration-500"
					/>
				</Card.Header>
				<Card.Content class="px-3 pb-3 space-y-2">
					<div class="grid grid-cols-4 my-3 items-center">
						<div class="col-span-3 font-medium tracking-wide">
							Chillin' in Another World with Level 2 Super Cheat Powers
						</div>
						<div class="col-span-1 opacity-50 text-sm justify-self-end place-self-end">
							4:00 Min
						</div>
					</div>
					<Button class="flex flex-row items-center w-full tracking-wide">
						<Play class="h-4 w-4 mr-2" />
						Continue Learning
					</Button>
				</Card.Content>
			</Card.Root>
		</div>
	</div>

	<div class="space-y-4">
		<h2 class="text-2xl">New Courses</h2>
		<div class="grid grid-cols-1 gap-4 md:grid-cols-2 xl:grid-cols-3 overflow-hidden">
			<Card.Root class="overflow-hidden">
				<Card.Header class="p-0 overflow-hidden">
					<img
							src="https://images.unsplash.com/photo-1496281955129-ad3ba33b7591?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
							alt="video-banner"
							class="object-contain rounded-lg hover:scale-105 transition-all duration-500"
					/>
				</Card.Header>
				<Card.Content class="px-3 pb-3 space-y-2">
					<h2 class="col-span-3 font-medium tracking-wide mt-1.5">
						Course Name
					</h2>
					<div class="grid grid-cols-4 my-3 items-center">
						<h2 class="col-span-3 opacity-50 tracking-wide">
							Shivam
						</h2>
						<p class="col-span-1 opacity-50 text-sm justify-self-end">
							4:00 Min
						</p>
					</div>
					<div class="flex flex-row items-center space-x-4">
						<Button class="flex flex-row items-center w-full tracking-wide">
							<FolderOpenDot class="h-4 w-4 mr-2" />
							View Course
						</Button>
						<Button class="flex flex-row items-center w-full tracking-wide">
							<Bookmark class="h-4 w-4 mr-2" />
							Bookmark
						</Button>
					</div>

				</Card.Content>
			</Card.Root>
			<Card.Root class="overflow-hidden">
				<Card.Header class="p-0 overflow-hidden">
					<img
							src="https://images.unsplash.com/photo-1496281955129-ad3ba33b7591?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
							alt="video-banner"
							class="object-contain rounded-lg hover:scale-105 transition-all duration-500"
					/>
				</Card.Header>
				<Card.Content class="px-3 pb-3 space-y-2">
					<h2 class="col-span-3 font-medium tracking-wide mt-1.5">
						Course Name
					</h2>
					<div class="grid grid-cols-4 my-3 items-center">
						<h2 class="col-span-3 opacity-50 tracking-wide">
							Shivam
						</h2>
						<p class="col-span-1 opacity-50 text-sm justify-self-end">
							4:00 Min
						</p>
					</div>
					<div class="flex flex-row items-center space-x-4">
						<Button class="flex flex-row items-center w-full tracking-wide">
							<FolderOpenDot class="h-4 w-4 mr-2" />
							View Course
						</Button>
						<Button class="flex flex-row items-center w-full tracking-wide">
							<Bookmark class="h-4 w-4 mr-2" />
							Bookmark
						</Button>
					</div>

				</Card.Content>
			</Card.Root>
			<Card.Root class="overflow-hidden">
				<Card.Header class="p-0 overflow-hidden">
					<img
							src="https://images.unsplash.com/photo-1496281955129-ad3ba33b7591?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
							alt="video-banner"
							class="object-contain rounded-lg hover:scale-105 transition-all duration-500"
					/>
				</Card.Header>
				<Card.Content class="px-3 pb-3 space-y-2">
					<h2 class="col-span-3 font-medium tracking-wide mt-1.5">
						Course Name
					</h2>
					<div class="grid grid-cols-4 my-3 items-center">
						<h2 class="col-span-3 opacity-50 tracking-wide">
							Shivam
						</h2>
						<p class="col-span-1 opacity-50 text-sm justify-self-end">
							4:00 Min
						</p>
					</div>
					<div class="flex flex-row items-center space-x-4">
						<Button class="flex flex-row items-center w-full tracking-wide">
							<FolderOpenDot class="h-4 w-4 mr-2" />
							View Course
						</Button>
						<Button class="flex flex-row items-center w-full tracking-wide">
							<Bookmark class="h-4 w-4 mr-2" />
							Bookmark
						</Button>
					</div>

				</Card.Content>
			</Card.Root>

		</div>
	</div>
</div>
