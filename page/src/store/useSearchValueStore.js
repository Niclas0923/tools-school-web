import {defineStore} from "pinia";
import {ref} from "vue";

export const useSearchValueStore = defineStore("searchValue-dataShow",()=>{
    const searchValue = ref("")
    return {searchValue}
})