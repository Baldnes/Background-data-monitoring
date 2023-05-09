<template>
    <el-row class="home" :gutter="20">
        <el-col :span="8" style="margin-top: 20px">
            <el-card shadow="hover" style="background-color: #2c5ef2">
                <div class="user">
                    <img src="../../assets/image/tou.jpg" alt="">
                    <div class="user-info" style="color: #fff">
                        <p class="name">Admin</p>
                        <p class="role" >超级管理员</p>
                    </div>
                </div>
                <div class="login-info">
                    <p>上次登陆时间:<span>2023-3-29</span></p>
                    <p>上次登陆地点：<span>洛阳</span></p>
                </div>
            </el-card>
            <el-card shadow="hover" style="margin-top: 20px" height="550px" class="card">
                <el-table :data="tableData">
                    <el-table-column v-for="(val, key) in tableLabel" :key="key" :prop="key" :label="val">
                    </el-table-column>
                </el-table>
            </el-card>
        </el-col>
        <el-col :span="16" style="margin-top: 20px">
            <div class="num">
                <el-card :body-style="{ display: 'flex', padding: 0 }" v-for="item in countData" :key="item.name">
                    <component class="icons" :is="item.icon" :style="{ color: item.color }"></component>
                    <div class="details">
                        <p class="nums">{{ item.value }}</p>
                        <p class="txt">{{ item.name }}</p>
                    </div>
                </el-card>
            </div>
            <el-card style="height: 450px" class="line">
                <div ref="echart" style="height: 450px"></div>
            </el-card>
        </el-col>
    </el-row>
</template>
<script setup>
import * as echarts from 'echarts'
import { getCurrentInstance, reactive } from 'vue';
let tableData = ref([])
let countData = ref([])
let tableLabel = {
    name: "品牌",
    todayBuy: "今日购买",
    monthBuy: "本月购买",
    totalBuy: "总购买"
}
const { proxy } = getCurrentInstance()
const getTbaleLIst = async () => {
    let res = await proxy.$api.getTableData()
    tableData.value = res
}
const getCountData = async () => {
    let res = await proxy.$api.getCountData()
    countData.value = res
}

let echart = null
const getChartData = async () => {
    let res = await proxy.$api.getChartData()
    let myChart = echarts.init(echart)
    let lineChart = reactive({
        title: {
            text: "最近五月销量"
        },
        tooltip: {},
        backgroundColor:"#2c5ef2",
        textStyle:{
            color:"#fff"
        },
        legend: {
            data: ['2022-11','2022-12','2023-01','2023-02','2023-03']
        },
        xAxis: {
            type: 'category',
            data: res.name
        },
        yAxis: {
            type: "value"
        },
        series: [
            {
                name: "2022-11",
                type: "line",
                data: res.num1,
                areaStyle: {},
                emphasis: { focus: "series" },
            }, {
                name: "2022-12",
                type: "line",
                data: res.num2,
                areaStyle: {},
                emphasis: { focus: "series" },
            },
            {
                name: "2023-01",
                type: "line",
                data: res.num3,
                areaStyle: {},
                emphasis: { focus: "series" },
            },
            {
                name: "2023-02",
                type: "line",
                data: res.num4,
                areaStyle: {},
                emphasis: { focus: "series" },
            },
            {
                name: "2023-03",
                type: "line",
                data: res.num5,
                areaStyle: {},
                emphasis: { focus: "series" },
            }
        ]
    })
    myChart.setOption(lineChart)
    window.addEventListener("resize", () => { myChart.resize() });
}
onMounted(() => {
    getTbaleLIst(),
        getCountData(),
        getChartData()
})
</script>
<style scoped lang="less">
.home {
    .user {
        display: flex;
        align-items: center;
        padding-bottom: 20px;
        border-bottom: 1px solid #ccc;
        margin-bottom: 20px;

        img {
            width: 90px;
            height: 90px;
            border-radius: 50%;
            margin-right: 40px;
        }
    }

    .login-info {
        p {
            line-height: 30px;
            font-size: 14px;
            color: #fff;

            span {
                color: #fff;
                margin-left: 60px;
            }
        }
    }

    .num {
        display: flex;
        flex-wrap: wrap;
        justify-content: space-between;

        .el-card {
            width: 32%;
            margin-bottom: 20px;
            background-color: #2c5ef2;
        }

        .icons {
            width: 80px;
            height: 80px;
            font-size: 30px;
            text-align: center;
            line-height: 80px;
        }

        .dateils {
            margin-left: 15px;
            display: flex;
            flex-direction: column;
            justify-content: center;

            .txt {
                font-size: 14px;
                text-align: center;
                margin-left: 10px;
            }
        }
    }
}

.nums {
    margin-left: 10px;
    margin-top: 10px;
    margin-bottom: 10px;
    font-size: 28px;
    color: #fff;
}
.card,.line {
    background-color: #2c5ef2;
}
.card {
    height: 400px;
    .el-table {
        height: 350px;
    }
}
</style>