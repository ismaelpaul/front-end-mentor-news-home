<script>
    export let element
</script>

<div class="flex flex-row gap-6 laptop:flex-1">
    <img class="max-w-[33%] h-32" src={element.image} alt='retro pc'/>
    <div>
        <h2 class="text-medium-heading text-grayish-blue mb-3">0{element.id}</h2>
        <h3 class="text-x-small-heading mb-[0.563rem] cursor-pointer hover:text-light-vermillion">{element.title}</h3>
        <p class="text-paragraph text-gunmetal">{element.text}</p>
    </div>
</div>