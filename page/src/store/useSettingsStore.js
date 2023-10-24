import {defineStore} from "pinia";
import {reactive} from "vue";

export const UseSettingsStore = defineStore("settingsValue",()=>{
    const set = reactive({
        printOptions:{
            // 是否携带序号，默认不携带
            before:false,
            // 中间插入什么，默认逗号
            join: "，"
        }
    })

    function reset(){
        const result = confirm("确定要还原设置吗？。");
        if (result) {
            set.printOptions.before = false
            set.printOptions.join = "，"
        }
    }
    return {set,reset}
})