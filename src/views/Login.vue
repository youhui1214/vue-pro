<template>
    <div class="login">
        <img alt="Vue logo" src="../assets/logo.png">

        <div>
            <div class="user">
                <span>账号：</span><input id="inputs" class="username" v-model="username" placeholder="请输入用户名">
            </div>
            <div class="pass">
                <span>密码：</span><input class="password" v-model="username" placeholder="请输入密码">
            </div>
        </div>



        <button class="loginBtn" @click="enterOk">登录</button>
        <button class="loginBtn">注册</button>
    </div>
</template>

<script>

    import { getData } from '@/api'
    import { deepClone } from '@/utils'

    export default {
        name: 'Login',
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

                this.username = deepClone(this.username)

                setTimeout(() =>{

                    this.$router.push('detail')
                },1000)

            }
        }


    }
</script>

<style scoped>

.login {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;


}

.user {
    margin-top: 10px;
    display: inline-block;
}
.pass {
    margin-top: 50px;
}

input {
    border-top: 0;
    border-left: 0;
    border-right: 0;
    border-bottom:#000000 1px solid;
    background-color: #ffffff;
    outline: 0;
}
.loginBtn {
    margin-top: 50px;
    width: 150px;
    height: 40px;
    background-color: #42b983;
    font-size: 16px;
    font-weight: bold;
}





</style>
