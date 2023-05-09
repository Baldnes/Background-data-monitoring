<template>
    <div class="tags">
        <el-tag v-for="(tag,index) in tags" :key="index" :closable="tag.name !== 'home'" :disable-transitions="false"
            :effect="$route.name === tag.name ? 'dark' : 'plain'" :type="tag.type" @click="changeMenu(tag)"
            @close="handleClose(tag, index)">
            {{ tag.label }}
        </el-tag>
    </div>
</template>
<script setup>
import { useStore } from 'vuex'
import { useRoute, useRouter } from 'vue-router'
const store = useStore()
const router = useRouter()
const route = useRoute()
const tags = store.state.tabsList
const changeMenu = (item) => {
    router.push({ name: item.name })
}
const handleClose = (tag, index) => {
    let length = tags.length - 1;
    store.commit('closeTab', tag)
    if (tag.name !== route.name) {
        return;
    }
    if (index === length) {
        router.push({
            name: tags[index - 1].name
        })
    } else {
        router.push({
            name: tags[index].name
        })
    }
}
</script>
<style scoped lang="less">
.tags {
    padding: 20px;
    width: 100%;

    .el-tag {
        margin-right: 15px;
        cursor: pointer;
    }
}
</style>