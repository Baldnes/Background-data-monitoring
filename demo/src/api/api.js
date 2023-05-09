import requset from "./requset"
export default {
    getTableData(params){
        return requset({
            url:"/home/getTableData",
            method:"get",
            data: params,
            mock:true
        })
    },
    getCountData(){
        return requset({
            url:"/home/getContent",
            method:"get",
            mock:true
        })
    },
    getChartData() {
        return requset({
            url:"/home/echartData",
            method:"get",
            mock:true
        })
    },
    getUserData(params) {
        return requset({
            url:"/user/getUser",
            method:"get",
            mock:false,
            data:params
        })
    }
}