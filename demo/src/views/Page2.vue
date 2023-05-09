<template>
    <div class="content">
        <div class="left">
            <div class="one">
                <div class="one-left">
                    <el-icon color="#fff" size="50">
                        <User />
                    </el-icon>
                </div>
                <div class="one-r">
                    <span>购买总数</span>
                </div>
                <div class="one-b">
                    <span>999999999</span>
                </div>
            </div>
            <div class="one">
                <div class="one-left">
                    <el-icon color="#fff" size="50">
                        <Money />
                    </el-icon>
                </div>
                <div class="one-r">
                    <span>你的账户</span>
                </div>
                <div class="one-b">
                    <span>9999999999.99</span>
                </div>
            </div>
            <div class="one">
                <div class="one-left">
                    <el-icon color="#fff" size="50">
                        <TrendCharts />
                    </el-icon>
                </div>
                <div class="one-r">
                    <span>流量统计</span>
                </div>
                <div class="one-b">
                    <span>999.99GB</span>
                </div>
            </div>
        </div>
        <div class="right">
            <div class="r-t">
                <div class="c-t">
                    <div>用户季度增长表</div>
                    <div>日期：2022-11 -- 2023-01</div>
                </div>
                <div class="zhu">
                    <div class="z-one"></div>
                    <div>98987</div>
                </div>
                <div class="zhu">
                    <div class="z-two"></div>
                    <div>989871</div>
                </div>
                <div class="zhu">
                    <div class="z-three"></div>
                    <div>88987</div>
                </div>
            </div>
            <div class="r-c">
                <div ref="one"></div>
                <div ref="two"></div>
            </div>
            <div class="r-b">
                <div ref="three"></div>
            </div>
        </div>
    </div>
</template>
<script setup>
import * as echarts from 'echarts';
import { reactive } from 'vue';
let one = null
let two = null
let three = null
onMounted(() => {
    let myChart = echarts.init(three)
    let option = {
        title: {
            text: "年度销量表",
            textStyle: {
                color: "#fff",
            },
        },
        textStyle: {
            color: "#fff",
        },
        xAxis: {
            type: "category",
            data: [2017, 2018, 2019, 2020, 2021, 2022],
            show: false,
            nameTextStyle: {
                color: "#fff"
            }
        },
        yAxis: {
            type: "value",
            nameTextStyle: {
                color: "#fff"
            }
        },
        tooltip: {},
        series: [
            {
                name: "年度销量",
                data: [984938, 884938, 1084938, 284938, 984938, 984938],
                type: "line",
                lineStyle: {
                    color: "red"
                },
                areaStyle: {
                    color: "red"
                },
                smooth: true
            }
        ]
    }
    myChart.setOption(option)
    let pieChart = echarts.init(one)
    let list = reactive([
        { value: 837456, name: "oppo", normal: { color: "red" } },
        { value: 937456, name: "vivo", normal: { color: "green" } },
        { value: 1837456, name: "苹果", normal: { color: "yellow" } },
        { value: 1837456, name: "小米", normal: { color: "blue" } },
        { value: 737456, name: "三星", normal: { color: "pink" } },
        { value: 337456, name: "魅族", normal: { color: "purple" } }
    ])
    let perOption = {
        title: {
            text: "收入详情",
            textStyle: {
                color: "#fff"
            },
            subtext: "单位：万",
            subtextStyle: {
                color: "#fff"
            }
        },
        tooltip: {
            trigger: "item"
        },
        legend: {
            left: "left",
            // 图例朝向
            orient: "verical",
            top: "middle"
        },
        series: [
            {
                name: "收入",
                type: "pie",
                data: list,
                radius: ['30%', '70%'],
                roseType: "area",
                itemStyle: {
                    color: list.normal,
                    ShadowBlur: 20,
                    shadowColor: "#fff"
                },
                showEmptyCircle: true,
                emptyCircleStyle: {
                    borderWidth: 5
                }
            }
        ]
    }
    pieChart.setOption(perOption)
    let columnars = echarts.init(two)
    let columnarChart = {
        title: {
            text: "流量统计",
            textStyle:{
                color:"#fff"
            }
        },
        textStyle: {
            color: "#fff",
        },
        xAxis:{
            type:"category",
            data:['2022-11','2022-12','2023-01','2023-02','2023-03']
        },
        yAxis:{
            type:"value"
        },
        tooltip:{

        },
        series:[
            {
                name:'流量',
                type:"bar",
                data:[300,500,600,200,500],
                itemStyle: { 
                    normal: { 
                         color: function (params) 
                         { let colorList = [
                             "red", "yellow", "green", "blue", "pink",
                             ];return colorList[params.dataIndex]; }
                         }
                        }
            }
        ]
    }
    columnars.setOption(columnarChart)
})

</script>
<style scoped lang="less">
.content {
    width: 100%;
    height: 670px;
    display: flex;
    flex-wrap: nowrap;
    overflow-y: hidden;
}

.left {
    width: 350px;
    background-color: #2c5ef2;
    height: 100%;
    padding: 30px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    border-radius: 5px;

    .one {
        display: flex;
        justify-content: space-around;
        flex-wrap: wrap;

        .one-left {
            border: 2px #fff solid;
            height: 60px;
            width: 60px;
            border-radius: 50%;

            .el-icon {
                position: relative;
                left: 3px;
            }
        }

        .one-r {
            line-height: 60px;
            color: #fff;
            font-size: 30px;
        }

        .one-b {
            width: 240px;
            text-align: center;
            height: 50px;
            background-color: #fff;
            line-height: 50px;
            color: #2c5ef2;
            font-weight: bolder;
            font-size: 30px;
            margin-top: 20px;
            border-radius: 10px;
        }
    }
}

.right {
    width: 920px;
    height: 100%;
    margin-left: 20px;

    .r-t {
        height: 27%;
        width: 913px;
        background-color: #2c5ef2;
        padding: 20px;
        border-radius: 4px;

        .c-t {
            display: flex;
            justify-content: space-between;
            color: #fff;
        }

        .zhu {
            height: 26px;
            width: 800px;
            background-color: #fff;
            margin-top: 10px;
            display: flex;
            justify-content: space-between;
            line-height: 26px;
            color: #57f37b;
            padding-right: 20px;

            .z-one {
                width: 400px;
                height: 26px;
                background: linear-gradient(to left, #2cf25a 0%, #fff 100%);
            }

            .z-two {
                width: 700px;
                height: 26px;
                background: linear-gradient(to left, #2cf25a 0%, #fff 100%);
            }

            .z-three {
                width: 300px;
                height: 26px;
                background: linear-gradient(to left, #2cf25a 0%, #fff 100%);
            }
        }
    }

    .r-c {
        height: 40%;
        width: 913px;
        margin-top: 2%;
        display: flex;
        justify-content: space-between;
        border-radius: 4px;

        div {
            width: 440px;
            height: 240px;
            background-color: #2c5ef2;
            border-radius: 8px;
        }
    }

    .r-b {
        margin-top: 2%;
        height: 27%;
        width: 913px;
        background-color: #2c5ef2;
        border-radius: 4px;

        div {
            width: 100%;
            height: 220px;
        }
    }
}</style>