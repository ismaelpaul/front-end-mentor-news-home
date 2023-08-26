<script>
    import "../app.css";
	import Header from "../lib/header.svelte";
	import Nav from "../lib/nav.svelte";
	import Sidebar from "../lib/sidebar.svelte";

    let isSidebarOpen = false;


    export const toggleSidebar = () => {
    isSidebarOpen = !isSidebarOpen
}
</script>
<div class="relative">

    {#if isSidebarOpen}
    <div class="flex flex-row-reverse w-[100vw] h-[100vh]">
        
            <Sidebar on:toggle={toggleSidebar} />
            <div class="bg-dark-space-blue opacity-50 w-full h-full"></div>
        </div>
    {/if}
    <Nav on:toggle={toggleSidebar}/>
    <Header />
</div>

<style lang="postcss">

</style>