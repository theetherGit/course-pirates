<script lang="ts">
	import {Bookmark, BookmarkCheck, FolderOpenDot, Gauge, ListChecks, Play, PlayCircle} from 'lucide-svelte';
	import * as Card from '$lib/components/ui/card/index.js';
	import {Button} from "$lib/components/ui/button";
</script>


<div class="mb-3">
  <h2 class="mb-2 ml-2">All Courses</h2>
  <div>
    <Card.Root>
      <Card.Header class=" p-3 flex flex-row items-center justify-between space-y-0 pb-2">
        <Card.Title class="text-sm font-small">Total Courses</Card.Title>
      </Card.Header>
      <Card.Content class="p-3 pt-0 ml-">
        <div class="text-sm font-bold">2</div>
      </Card.Content>
    </Card.Root>
  </div>
</div>

<div class="space-y-4">
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
