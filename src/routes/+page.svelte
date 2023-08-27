<script>
    import "../app.css";
	import Cards from "../lib/cards.svelte";
	import Header from "../lib/header.svelte";
	import Nav from "../lib/nav.svelte";
	import New from "../lib/new.svelte";
	import Sidebar from "../lib/sidebar.svelte";

    let isSidebarOpen = false;


    export const toggleSidebar = () => {
    isSidebarOpen = !isSidebarOpen

    if (isSidebarOpen) {
      document.body.classList.add('overflow-hidden');
    } else {
      document.body.classList.remove('overflow-hidden');
    }
}
</script>

<div>

    {#if isSidebarOpen}
    <div class="flex flex-row-reverse w-[100vw] h-[100vh] absolute top-0">
        
            <Sidebar on:toggle={toggleSidebar} />
            <div class="bg-very-dark-blue opacity-50 w-full h-full"></div>
        </div>
    {/if}
    <Nav on:toggle={toggleSidebar}/>
    <div class="laptop:mx-[10.313rem] laptop: grid laptop:grid-cols-3 laptop:grid-row-3 laptop:gap-[1.875rem]">

        <Header />
        <New />
        <Cards />
    </div>
</div>

<style lang="postcss">

</style>