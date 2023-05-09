<template>
    <div class="common-layout">
        <el-container class="lay-container">
            <component-aside />
            <el-container class="r-container">
                <component-header></component-header>
                <ComponentTab></ComponentTab>
                <el-main>
                    <router-view></router-view>
                </el-main>
            </el-container>
        </el-container>
    </div>
</template>
<script setup>
import ComponentHeader from '../components/ComponentHeader.vue';
import ComponentAside from '../components/ComponentAside.vue'
import ComponentTab from '../components/ComponentTab.vue';
</script>
<style lang="less">
.el-container {
    flex-wrap: wrap;
    align-items: flex-start;
}
.common-layout {
    height: 100%;
    & > .el-container {
        height: 100%;
        & > .el-aside {
            height: 100%;
            background-color: #2c5ef2;
        }
    }
    .lay-container {
        flex-wrap: nowrap;
    }
}
</style>