<template>
    <div class="home">
        <div class="header">
            <div class="left"></div>
            <div class="right"></div>

        </div>

    </div>
</template>

<script>

import HelloWorld from '@/components/HelloWorld.vue'
import MainItem from '@/components/MainItem.vue'

export default {
    name: 'Home',
    components: {
        HelloWorld,
        MainItem
    }
}
</script>

<style scoped>

.home {
    width: 100%;
    height: 100%;
    background-color: antiquewhite;
}
.header {
    width: 100%;
    height: 100px;
    background-color: #42b983;

    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
}

.left {
    margin-left: 20px;
    width: 100px;
    height: 60px;
    background-color: aqua;
}

.right {
    margin-right: 20px;
    width: 100px;
    height: 80px;
    background-color: aquamarine;
}



</style>
