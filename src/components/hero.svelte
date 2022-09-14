<script>
    import arrow from '../../node_modules/bootstrap-icons/icons/arrow-right.svg'
    import white from '../../img/whiteOnMask.png'
</script>
<div class="bg-primary">
    <div class="m-auto text-center">
        <slot>
            
        </slot>
    </div> 
    <div class="flex justify-center content-center">
        <a class="bg-secondary text-CCHSwhite rounded-lg hover:bg-yellow-700 p-4 font-secondary" href="/teams">View Teams</a>
    </div>
    <img src={white} class="m-auto" alt="">
</div>


<style>
.grid {
    display:grid;
    grid-template-columns: 1fr 1fr;
}
.tile {
    padding: 50px;
    margin: 50px;
    border-radius:30px;
    text-align:left;
}
img {
    width: 35%;
}
</style>