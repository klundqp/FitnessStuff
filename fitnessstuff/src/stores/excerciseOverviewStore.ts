import { defineStore } from "pinia";
import type { Exercise } from "@/models/exercise"
import { exercises } from "@/data/exercises.json"

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
            this.excerciseList = exercises as Exercise[];
        }
    }
});