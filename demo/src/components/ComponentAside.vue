<template>
  <el-aside :width="$store.state.isCollapse ? '180px':'64px'">
    <el-menu class="el-menu-vertical-demo" background-color="#2c5ef2" text-color="#fff" :collapse="!$store.state.isCollapse"
    :collapse-transition="false">
    <h3 v-show="$store.state.isCollapse">后台数据</h3>
    <h3 v-show="!$store.state.isCollapse">数据</h3>
      <el-menu-item
        :index="item.path"
        v-for="item in noChildren()"
        :key="item.path"
        @click="clickMenu(item)"
      >
        <component class="icons" :is="item.icon"></component>
        <span>{{ item.label }}</span>
      </el-menu-item>
      <el-sub-menu
        :index="item.label"
        v-for="item in hasChildren()"
        :key="item.path"
      >
        <template #title>
          <component class="icons" :is="item.icon"></component>
          <span>{{ item.label }}</span>
        </template>
        <el-menu-item-group>
          <el-menu-item
            :index="subItem.path"
            v-for="(subItem, subIndex) in item.children"
            :key="subIndex"
            @click="clickMenu(subItem)"
          >
            <component class="icons" :is="subItem.icon"></component>
            <span>{{ subItem.label }}</span>
          </el-menu-item>
        </el-menu-item-group>
      </el-sub-menu>
    </el-menu>
  </el-aside>
</template> 
<script setup>
import {useRouter} from 'vue-router'
import { useStore } from 'vuex';
const list = reactive([
  {
    path: '/user',
    name: 'user',
    label: '用户管理',
    icon: 'user',
    url: 'UserManage/UserManage'
  },
  {
    label: '其他',
    icon: 'location',
    path: "/other",
    children: [
      {
        path: '/page1',
        name: 'page1',
        label: '国内数据',
        icon: 'setting',
        url: 'Other/PageOne'
      },
      {
        path: '/page2',
        name: 'page2',
        label: '详细数据',
        icon: 'setting',
        url: 'Other/PageTwo'
      }
    ]
  }
])

// 过滤是否存在二级菜单
const noChildren = () => {
  return list.filter((item) => !item.children)
}
const hasChildren = () => {
  return list.filter((item) => item.children)
}
const router = useRouter()
const store = useStore()
const clickMenu = (item) => {
  router.push({
    path:item.name
  });
  store.commit("selectMenu",item);
}
</script>
<style scoped lang="less">
.icons {
  width: 18px;
  height: 18px;
}
.el-menu {
  border: none;
  h3 {
    line-height: 48px;
    color: #fff;
    text-align: center;
  }
}
</style>