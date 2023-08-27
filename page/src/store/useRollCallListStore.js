import {defineStore} from "pinia";
import {computed, reactive, toRaw} from "vue";

export const useRollCallListStore = defineStore("rollCallList",()=>{
    const list = reactive({
        allOn:{
            tag:["home"],
            val:{
                home:[]
            }
        },
        allId:[],
        // 这个now是用来读取的
        now:computed(()=>{
            return list.nowWhite?list.nowWhite:list.allOn.tag[0]
        }),
        // 这个值是用于写入的
        nowWhite:""
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
        // 设置now
        list.nowWhite = list.allOn.tag[0]
        // console.log(list.allOn.home)
    }

    // 保存
    function safe(){
        localStorage.setItem("RollCall",JSON.stringify(toRaw(list.allOn)))
    }

    function onClick(i){
        list.allOn.val[list.now].splice(list.allOn.val[list.now].indexOf(i),1)
        safe()
    }

    function downClick(i){
        list.allOn.val[list.now].push(Number(i))
        list.allOn.val[list.now].sort((a, b)=> a - b)
        safe()
    }

    // 刷新
    function refresh(){
        const result = confirm("是否要刷新这个标签的数据？所有人都会被移动到下方。");
        if (result) {
            list.allOn.val[list.now] = []
            safe()
        }
    }

    // 上下对调
    function changeUpDone(){
        list.allOn.val[list.now] = list.allId.filter(i => list.allOn.val[list.now].indexOf(i) === -1)
        safe()
    }

    return {list,initialization,onClick,downClick,refresh,changeUpDone}
})