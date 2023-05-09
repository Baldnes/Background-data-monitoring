<template>
    <el-header>
        <div class="l-content">
            <!-- 图标的展示 -->
            <el-button size="small" @click="handleCollpase">
                <el-icon :size="20">
                    <Menu />
                </el-icon>
            </el-button>
            <el-breadcrumb separator="/" class="bread">
                <el-breadcrumb-item :to="{ path: '/home' }">首页</el-breadcrumb-item>
                <el-breadcrumb-item :to="current.path"
                 v-if="current">{{ current.label }}</el-breadcrumb-item>
            </el-breadcrumb>
        </div>
        <div class="r-content">
            <el-dropdown>
                <span class="el-dropdown-link">
                    <img class="tou" :src="getImgSrc('tou')" alt="">
                </span>
                <template #dropdown>
                    <el-dropdown-menu>
                        <el-dropdown-item>个人中心</el-dropdown-item>
                        <el-dropdown-item @click="end">退出</el-dropdown-item>
                    </el-dropdown-menu>
                </template>
            </el-dropdown>
        </div>
    </el-header>
</template>
<script setup>
import {useStore} from 'vuex'
import {useRouter} from 'vue-router'
const getImgSrc = (tou) => {
    return new URL(`../assets/image/${tou}.jpg`, import.meta.url).href
}
let store = useStore()
let handleCollpase = () => {
    store.commit("updatedsCollapse")
}
const current = computed(()=>{
    return store.state.currentMenu
})
const router = useRouter()
const end = () => {
    router.push({
        name:"login"
    })
}
</script>
<style scoped lang="less">
header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    background-color: #2c5ef2;
    border-left: 1px solid white;
}

.r-content {
    .tou {
        width: 40px;
        height: 40px;
        border-radius: 50%;
    }
}

.l-content {
    display: flex;
    align-items: center;

    .el-button {
        margin-right: 20px;
    }

    h3 {
        color: #fff;
    }
}
.bread /deep/span {
    color: #fff !important;
    cursor: pointer !important;
}
</style>