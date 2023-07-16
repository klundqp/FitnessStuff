import { defineStore } from "pinia";
import type { Exercise } from "@/models/exercise"
import { getExercises } from "@/api/apiMock";

export const useExcerciseOverviewStore = defineStore("excerciseOverviewStore", {
    state: () => ({
        text: "",
        excerciseList: [] as Exercise[]
    }),
    getters: {
        completeExerciseList(): Exercise[] {
            return this.excerciseList;
        }
    },
    actions: {
        load() {
            this.excerciseList = getExercises();
        }
    }
});