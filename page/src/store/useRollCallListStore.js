import {defineStore} from "pinia";
import {reactive, toRaw, watch} from "vue";

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

    return {list,initialization,onClick,downClick}
})