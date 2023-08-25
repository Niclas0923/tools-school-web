import {defineStore} from "pinia";
import {reactive, toRaw} from "vue";

export const useRollCallListStore = defineStore("rollCallList",()=>{
    const list = reactive({
        allOn:{
            home:[],
        },
        allId:[]
    })

    // 初始化
    function initialization(ids){
        list.allId = [...ids.value]
        // 尝试读取localStorage
        const val = localStorage.getItem("RollCall")
        if (val){
            list.allOn = JSON.parse(val)
        }else{
            safe()
        }
        // console.log(list.allOn.home)
    }

    // 保存
    function safe(){
        localStorage.setItem("RollCall",JSON.stringify(toRaw(list.allOn)))
    }

    function onClick(i){
        list.allOn.home.splice(list.allOn.home.indexOf(i),1)
        safe()
    }

    function downClick(i){
        list.allOn.home.push(Number(i))
        list.allOn.home.sort((a, b)=> a - b)
        safe()
    }

    // 刷新
    function refresh(){
        const result = confirm("是否要刷新这个标签的数据？所有人都会被移动到下方。");
        if (result) {
            list.allOn.home = []
            safe()
        }
    }

    // 上下对调
    function changeUpDone(){
        list.allOn.home = list.allId.filter(i => list.allOn.home.indexOf(i) === -1)
        safe()
    }

    return {list,initialization,onClick,downClick,refresh,changeUpDone}
})