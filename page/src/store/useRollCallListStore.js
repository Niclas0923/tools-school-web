import {defineStore} from "pinia";
import {reactive} from "vue";

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
        // const val = localStorage.getItem("RollCall-home")
        // if (val){
        //     list.home = JSON.parse(val)
        // }
        console.log(list.allOn.home)
    }

    function onClick(i){
        list.allOn.home.splice(list.allOn.home.indexOf(i),1)
    }

    function downClick(i){
        list.allOn.home.push(Number(i))
        list.allOn.home.sort((a, b)=> a - b)
    }

    return {list,initialization,onClick,downClick}
})