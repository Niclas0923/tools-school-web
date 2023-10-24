import {defineStore} from "pinia";
import {reactive} from "vue";

export const UseSettingsStore = defineStore("settingsValue",()=>{
    return reactive({
        printOptions: {
            // 是否携带序号，默认不携带
            before:false,
            // 中间插入什么，默认逗号
            join: "，"
        }
    })
})