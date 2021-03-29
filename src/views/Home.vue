<template>
    <div class="home">
        <img alt="Vue logo" src="../assets/logo.png">
<!--        <HelloWorld msg="Welcome to Your Vue.js App"/>-->
<!--        <router-link to="detail">detail</router-link> |-->
<!--        <router-link to="about">About</router-link>-->
        <div @click="tt" >detail</div>
        <div @click="aa">About</div>


        <router-view/>
    </div>
</template>

<script>

import HelloWorld from '@/components/HelloWorld.vue'

export default {
    name: 'Home',
    components: {
        HelloWorld
    },
    methods: {
        tt() {
            this.$router.push({path: '/home/about'})
        },
        aa() {
            this.$router.push('/home/detail')
        }
    }
}
</script>
