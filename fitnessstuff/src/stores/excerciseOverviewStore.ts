import { defineStore } from "pinia";
import { ref } from "vue";
import { useRouter } from "vue-router";

export const useExcerciseOverviewStore = defineStore("excerciseOverviewStore", {
    state: () => ({
        text: ""
    })
});