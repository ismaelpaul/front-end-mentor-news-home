<script>
    import { createEventDispatcher } from 'svelte'
	

    
  const dispatch = createEventDispatcher()

  function toggle() {
     dispatch('toggle')
  }
</script>

<div class=" flex items-center justify-between mx-4 my-7">
    <img class="h-7" src="/images/logo.svg" alt="logo" >
    <nav class="hidden">
        <ul>
            <li>Home</li>
            <li>New</li>
            <li>Popular</li>
            <li>Trending</li>
            <li>Categories</li>
        </ul>
    </nav>
    <img class="h-4" src="/images/icon-menu.svg" alt="menu" on:click={toggle}>
</div>
