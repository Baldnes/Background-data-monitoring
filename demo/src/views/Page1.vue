<template>
    <div class="box" ref="chinaMap"></div>
</template>
<script setup>
import * as echarts from 'echarts'
import { mapdata } from '../assets/map/mapData';
import {ramo} from '../assets/lay/lay'
let chinaMap = null
onMounted(() => {
    let myChart = echarts.init(chinaMap)
    echarts.registerMap('china',mapdata)
    let option = {
        geo:{
            type:"map",
            map:"china",
            roam:true,
            zoom:1.2,
            itemStyle:{
                areaColor:"rgb(34, 34, 34)"
            }
        },
        tooltip:{},
        series:[
        {
                type:"effectScatter",//带涟漪效果的标点
                coordinateSystem:"geo",
                data:[
                    {
                        name:"河南省",//数据项的名称
                        value:[
                        113.659057,34.762224,4000
                        ]
                    }
                ],
                // 设置涟漪效果的相关配置
                rippleEffect:{
                    number:3,//波纹数量
                    scale:3//波纹大小
                },
                itemStyle:{
                    color:"rgb(101, 255, 30)"
                }
            },
            {
                type:"effectScatter",//带涟漪效果的标点
                coordinateSystem:"geo",
                data:[
                    {
                        name:"四川省",//数据项的名称
                        value:[
                        104.075045,30.668992
                        ]
                    }
                ],
                // 设置涟漪效果的相关配置
                rippleEffect:{
                    number:3,//波纹数量
                    scale:4//波纹大小
                },
                itemStyle:{
                    color:"rgb(101, 255, 30)"
                }
            },
            {
                type:"effectScatter",//带涟漪效果的标点
                coordinateSystem:"geo",
                data:[
                    {
                        name:"山东省",//数据项的名称
                        value:[
                        117.003296,36.659109
                        ]
                    }
                ],
                // 设置涟漪效果的相关配置
                rippleEffect:{
                    number:3,//波纹数量
                    scale:3//波纹大小
                },
                itemStyle:{
                    color:"rgb(101, 255, 30)"
                }
            },
            {
                type:"effectScatter",//带涟漪效果的标点
                coordinateSystem:"geo",
                data:[
                    {
                        name:"海南省",//数据项的名称
                        value:[
                        110.369911,20.023085
                        ]
                    }
                ],
                // 设置涟漪效果的相关配置
                rippleEffect:{
                    number:3,//波纹数量
                    scale:4//波纹大小
                },
                itemStyle:{
                    color:"rgb(101, 255, 30)"
                }
            },
            {
                type:"effectScatter",//带涟漪效果的标点
                coordinateSystem:"geo",
                data:[
                    {
                        name:"北京市",//数据项的名称
                        value:[
                        116.405913,39.921107
                        ]
                    }
                ],
                // 设置涟漪效果的相关配置
                rippleEffect:{
                    number:3,//波纹数量
                    scale:5//波纹大小
                },
                itemStyle:{
                    color:"rgb(101, 255, 30)"
                }
            },
            {
                type:"effectScatter",//带涟漪效果的标点
                coordinateSystem:"geo",
                data:[
                    {
                        name:"西藏",//数据项的名称
                        value:[
                        91.171487,29.659422
                        ]
                    }
                ],
                // 设置涟漪效果的相关配置
                rippleEffect:{
                    number:3,//波纹数量
                    scale:1//波纹大小
                },
                itemStyle:{
                    color:"rgb(101, 255, 30)"
                }
            }
        ]
    }
    myChart.setOption(option)
    window.addEventListener("resize", () => { myChart.resize() });
})
</script>
<style scoped>
.box {
    width: 100%;
    height: 100vh;
}
</style>