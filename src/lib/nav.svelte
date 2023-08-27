<script>
    import { createEventDispatcher } from 'svelte'
	
  const dispatch = createEventDispatcher()

  function toggle() {
     dispatch('toggle')
  }
</script>

<div class=" flex items-center justify-between mx-4 my-7 laptop:mx-[10.313rem] laptop:mt-[5.563rem] laptop:mb-[3.438rem]">
    <img class="h-7 laptop:h-10" src="/images/logo.svg" alt="logo" >
    <nav class="hidden laptop:flex">
        <ul class="flex gap-10 text-nav cursor-pointer text-gunmetal">
            <li class="hover:text-light-vermillion">Home</li>
            <li class="hover:text-light-vermillion">New</li>
            <li class="hover:text-light-vermillion">Popular</li>
            <li class="hover:text-light-vermillion">Trending</li>
            <li class="hover:text-light-vermillion">Categories</li>
        </ul>
    </nav>
    <input type="image" class="h-4 laptop:hidden" src="/images/icon-menu.svg" alt="menu" on:click={toggle}>
</div>
