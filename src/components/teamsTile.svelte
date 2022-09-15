<script>
    export let sport;
    export let url;
</script>


<li class="tile">
    <div class="rounded-lg shadow-md shadow-gray-300 bg-white">
        <img src={url} alt={sport} class="m-auto p-4" />
        <div class="flex content-center justify-center p-4">
            <slot>
                
            </slot>
        </div>
    </div>
</li>

<style>
.tile {
    padding: 50px;
    margin: 50px;
    border-radius:30px;
    text-align:left;
}
</style>