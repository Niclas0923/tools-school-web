import {defineStore} from "pinia";
import {computed,shallowRef} from "vue";
import axios from "axios";

export const useValueStore = defineStore("val",()=>{
    // 列表信息
    let list = shallowRef([])

    // 点名使用的miniId与姓名的数组
    const miniIdAndNames = computed(()=>{
        const l = []
        list.value.forEach(v=>{
            l.push({name:v["name"], miniId:v["id"].slice(-2)})
        })
        return l
    })

    // 数据配合使用的信息数组
    const allValueList = computed(()=>{
        const l = []
        list.value.forEach(v=>{
            l.push([v["name"],v["id"],...v["tags"]])
        })
        return l
    })

    // names
    const names = computed(()=>{
        const l = []
        list.value.forEach(v=>{
            l.push(v["name"])
        })
        return l
    })

    // 更新列表信息
    function updateList(){
        axios.get("/data").then(
            data=>{
                if (data.data) list.value = data.data
            },
            err=>{
                console.log(err)
                alert("网络访问失败")
            }
        )
    }

    return {list,names,miniIdAndNames,allValueList,updateList}
})