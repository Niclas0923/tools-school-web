import {defineStore} from "pinia";
import {reactive} from "vue";
import axios from "axios";

export const useValueStore = defineStore("list",()=>{
    // 列表信息
    let list = reactive([])

    // 更新列表信息
    function updateList(){
        axios.get("/data").then(
            data=>{
                if (data.data) list = data.data
            },
            err=>{
                console.log(err)
                alert("网络访问失败")
            }
        )
    }

    return {list,updateList}
})