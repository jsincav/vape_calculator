<template>
    <div class="col-5">
        <label for="vape-price">Price of E-Cig/vaporizor device ($)</label>
        <input type="number" min="0" step="1" value="40" id="vape-price"/>
        <br>
        <label for="liquid-price">Price of E-Liquids ($)</label>
        <input type="number" min="0" step="0.1" value="15" id="liquid-price"/>
        <br>
        <label for="num-of-liquid">Number of E-Liquids per month</label>
        <input type="number" min="0" step="0.5" value="4" id="num-of-liquid"/>
    </div> 
</template>

<style>
input {
    float: right;
    clear: both;
}
</style>