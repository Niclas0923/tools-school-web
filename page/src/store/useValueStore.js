import {defineStore} from "pinia";
import {reactive} from "vue";

export const useValueStore = defineStore("list",()=>{
    const list = reactive([])
    return {list}
})