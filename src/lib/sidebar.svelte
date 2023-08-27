<script>
  import { createEventDispatcher } from 'svelte'
  const dispatch = createEventDispatcher()

  function toggle() {
     dispatch('toggle')
  }
</script>

    <div class="flex flex-col items-end bg-off-white h-screen absolute z-10 w-[70vw] px-4 py-7">
        <input type="image" class="w-[1.875rem]" src="/images/icon-menu-close.svg" alt="close menu" on:click={toggle}>
        <nav class="mt-[5.375rem] mr-auto">
            <ul class="text-sidebar-nav flex flex-col gap-6">
                <li>Home</li>
                <li>New</li>
                <li>Popular</li>
                <li>Trending</li>
                <li>Categories</li>
            </ul>
        </nav>
    </div>


