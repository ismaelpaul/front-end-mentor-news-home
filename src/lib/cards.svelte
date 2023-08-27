<script>
	import Card from "./card.svelte";

    let list = [{
        id: 1,
        image: '/images/image-retro-pcs.jpg',
        title: "Reviving Retro PC's",
        text: 'What happens when old PCs are given modern upgrades?'
    },
    {
        id: 2,
        image: '/images/image-top-laptops.jpg',
        title: "Top 10 Laptops of 2022",
        text: 'Our best picks for various needs and budgets.'
    },
    {
        id: 3,
        image: '/images/image-gaming-growth.jpg',
        title: "The Growth of Gaming",
        text: 'How the pandemic has sparked fresh opportunities.'
    }]
</script>

<article class="flex flex-col gap-8 mx-4 mb-16 laptop:flex-row laptop:mx-0 laptop:col-span-3 laptop:row-span-1">
    {#each list as element }
        <Card element={element} />
    {/each}
</article>