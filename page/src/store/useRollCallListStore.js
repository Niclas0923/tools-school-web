import {defineStore} from "pinia";
import {reactive, toRaw} from "vue";

export const useRollCallListStore = defineStore("rollCallList",()=>{
    const list = reactive({
        allOn:{
            tag:["home"],
            val:{
                home:[]
            }
        },
        allId:[],
        now:"home"
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
        list.now = list.allOn.tag[0]
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

    // 删除当前表
    function delNow(){
        const result = confirm(`是否要删除${list.now}这个标签的数据？删除后无法恢复数据。`);
        if (result) {
            list.allOn.tag.splice(list.allOn.tag.indexOf(list.now),1)
            delete list.allOn.val[list.now]
            // 设置now
            list.now = list.allOn.tag[0]
            safe()
        }
        // {"tag":["home","test"],"val":{"home":[],"test":[]}}
    }

    // 添加一个
    function addOneList(name){
        list.allOn.tag.push(name)
        list.allOn.val[name] = []
        list.now = name
        safe()
    }

    return {list,initialization,onClick,downClick,refresh,changeUpDone,delNow,addOneList}
})