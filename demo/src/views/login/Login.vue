<template>
    <div class="login">
        <h1>数据管理系统</h1>
        <el-card>
            <div>
                 <label>账号</label>
                <input type="text" v-model="name" placeholder="请输入账号">
            </div>
           <div>
            <label>密码</label>
            <input type="password" v-model="psd" placeholder="请输入密码">
           </div>
            <div>
                <el-button type="primary" @click="send">登陆</el-button>
            </div>
        </el-card>
    </div>
</template>
<script setup>
import { useRouter } from 'vue-router';
import { useStore } from 'vuex';
const router = useRouter()
const store = useStore()
let name = ref()
let psd = ref()
const send = () => {
    if(name.value == null) {
        alert('请输入账号')
    } else if (psd.value == null) {
        alert('请输入密码')
    } else if(name.value == store.state.name && psd.value == store.state.password) {
        router.push({
            name:"home"
        })
    } else {
        alert('账号密码错误')
        name.value = ''
        psd.value = ''
    }
}

</script>
<style scoped lang="less">
.el-card {
    width: 500px;
    height: 300px;
    margin: 0 auto;
    display: flex;
    align-items: center;
    background: url('../../assets/image/login.jpg');
    background-size: cover;
    position: relative;
    top: 200px;
    div {
        text-align: center;
        margin: 30px;
        input {
            margin-left: 50px;
            width: 250px;
            height: 40px;
            background: 0;
            border:none;
            border-bottom: 1px solid black;
            outline: none;
            text-indent: 2em;
        }
        label {
            font-weight: bolder;
        }
    }
}
.login {
    width: 100%;
    height: 100vh;
    background: url('../../assets/image/login.jpg') no-repeat;
    background-size: cover;
}
h1 {
    font-size: 50px;
    text-align: center;
    position: relative;
    top: 100px;
    color: #055061;
}
.el-button {
    width: 100px;
    height: 20px;  
    position: relative;
    left: 20px;
    color: rgb(19, 16, 16);
}
</style>