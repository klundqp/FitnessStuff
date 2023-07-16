import { defineStore } from "pinia";
import { getExerciseByName } from "@/api/apiMock";
import type { Exercise } from "@/models/exercise";

export const useExcercisePageStore = defineStore("excercisePageStore", {
    state: () => ({
        excerciseId: "",
        exercise: {} as Exercise|null
    }),
    getters: {
        getExercise(): Exercise|null {
            return this.exercise;
        }
    },
    actions: {
        load() {
            this.exercise = getExerciseByName(this.excerciseId) ?? null;
        }
    }
});