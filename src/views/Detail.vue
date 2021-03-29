<template>
    <div class="detail">
        <div class="left"></div>
        <div class="right">
            详情页
        </div>

    </div>
</template>

<script>

    import { getData } from '@/api'

    export default {
        name: 'Detail',
        data() {
            return {
                username: '',
                password: ''

            }
        },
        mounted() {
            // this._getSeller();

        },
        methods: {
            _getSeller() {
                getData().then(data=>{
                    console.log(data)
                }).catch(err=>{
                    console.log(err)
                });
            },
            enterOk() {

            }
        }


    }
</script>

<style scoped>

.detail {
    width: 100%;
    height: 100%;
    display: flex;

}

.left {
    width: 100px;
    height: 100%;
    background-color: #42b983;

}

.right {
    flex: 1;
    /*background-color: #2c3e50;*/
}







</style>
