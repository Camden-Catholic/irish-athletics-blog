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
    <div class="portrait:py-10">
        <img src={white} class="m-auto" alt="">
    </div>
</div>


<style>
img {
    width: 35%;
}
</style>