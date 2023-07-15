import { defineStore } from "pinia";
import { ref } from "vue";
import { useRouter } from "vue-router";

export const useExcercisePageStore = defineStore("excercisePageStore", {
    state: () => ({
        excerciseId: ""
    })
});