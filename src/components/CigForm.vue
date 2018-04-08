<template>
    <div class="col-5">
        <label for="num-of-cigs">Number of cigarettes a day</label>
        <input type="number" min="0" step="1" value="20" id="num-of-cigs"/>
        <br>
        <label for="pack-price">Price per pack ($)</label>
        <input type="number" min="0" step="0.1" value="7" id="pack-price"/>
    </div> 
</template>

<style>
input {
    float: right;
    clear: both;
}
</style>
