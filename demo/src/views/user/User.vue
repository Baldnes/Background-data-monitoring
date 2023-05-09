<template>
    <el-table :data="tableData" style="width: 100%">
        <el-table-column prop="date" label="账号" width="180" />
        <el-table-column prop="name" label="密码" width="180" />
        <el-table-column prop="address" label="权限" />
    </el-table>
</template>
<script setup>
const tableData = [
  {
    date: 'admin',
    name: '123456',
    address: '管理员',
  }
]
</script>
<style scoped></style>