<script lang="ts">
  import {BookmarkCheck, Gauge, ListChecks} from "lucide-svelte";
  import * as Card from "$lib/components/ui/card/index.js";
</script>

<div class="flex flex-col space-y-4">

<div>
<h2>Good Morning, Chutiye</h2>
</div>

<div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
  
  <Card.Root>
    <Card.Header
      class="flex flex-row items-center justify-between space-y-0 pb-2"
    >
      <Card.Title class="text-sm font-medium">In Progess</Card.Title>
      <Gauge class="h-4 w-4 text-muted-foreground" />
    </Card.Header>
    <Card.Content>
      <div class="text-2xl font-bold">2</div>
    </Card.Content>
  </Card.Root>

  <Card.Root>
    <Card.Header
      class="flex flex-row items-center justify-between space-y-0 pb-2"
    >
      <Card.Title class="text-sm font-medium">Bookmarks</Card.Title>
      <BookmarkCheck class="h-4 w-4 text-muted-foreground" />
    </Card.Header>
    <Card.Content>
      <div class="text-2xl font-bold">7</div>
    </Card.Content>
  </Card.Root>

  <Card.Root>
    <Card.Header
      class="flex flex-row items-center justify-between space-y-0 pb-2"
    >
      <Card.Title class="text-sm font-medium">Completed Courses</Card.Title>
      <ListChecks class="h-4 w-4 text-muted-foreground" />
    </Card.Header>
    <Card.Content>
      <div class="text-2xl font-bold">10</div>
    </Card.Content>
  </Card.Root>
  
</div>

<div>
  <h2>Continue Learning</h2>
  <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
  
    <Card.Root>
      <Card.Header
        class="flex flex-row items-center justify-between space-y-0 pb-2 "
      >
        <img src="https://images.unsplash.com/photo-1496281955129-ad3ba33b7591?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="video-banner" class="object-contain" />
      </Card.Header>
      <Card.Content>
        <div class="text-2xl font-bold">2</div>
      </Card.Content>
    </Card.Root>
  
    <Card.Root>
      <Card.Header
        class="flex flex-row items-center justify-between space-y-0 pb-2"
      >
        <Card.Title class="text-sm font-medium">Bookmarks</Card.Title>
        <BookmarkCheck class="h-4 w-4 text-muted-foreground" />
      </Card.Header>
      <Card.Content>
        <div class="text-2xl font-bold">7</div>
      </Card.Content>
    </Card.Root>
  
    <Card.Root>
      <Card.Header
        class="flex flex-row items-center justify-between space-y-0 pb-2"
      >
        <Card.Title class="text-sm font-medium">Completed Courses</Card.Title>
        <ListChecks class="h-4 w-4 text-muted-foreground" />
      </Card.Header>
      <Card.Content>
        <div class="text-2xl font-bold">10</div>
      </Card.Content>
    </Card.Root>
    
  </div>
</div>




</div>