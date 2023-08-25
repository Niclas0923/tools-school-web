import {defineStore} from "pinia";
import {computed, nextTick, shallowRef} from "vue";
import axios from "axios";
import {useRollCallListStore} from "./useRollCallListStore.js";

export const useValueStore = defineStore("val",()=>{
    const ls = useRollCallListStore()
    // 列表信息
    let list = shallowRef([])

    // 点名使用的miniId与姓名的数组
    const miniIdToNames = computed(()=>{
        const l2 = {}
        list.value.forEach(v=>{
            l2[String(Number(v["id"].slice(-2)))] = v["name"]
        })
        return l2
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

    // miniIds
    const miniIds = computed(()=>{
        const l = []
        list.value.forEach(v=>{
            l.push(Number(v["id"].slice(-2)))
        })
        return l
    })

    // 更新列表信息
    function updateList(){
        axios.get("/data").then(
            data=>{
                if (data.data) list.value = data.data
                nextTick(()=>{
                    ls.initialization(miniIds)
                })
            },
            err=>{
                console.log(err)
                alert("网络访问失败")
            }
        )
    }

    return {list,names,miniIds,miniIdToNames,allValueList,updateList}
})