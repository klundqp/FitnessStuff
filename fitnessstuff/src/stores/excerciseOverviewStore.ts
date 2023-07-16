import { defineStore } from "pinia";
import type { Exercise } from "@/models/exercise"
import { getExercises } from "@/api/apiMock";

type ExerciseQuery = {
    name: string;
    level: string;
    category: string;
    force: string;
    primary: string;
    secondary: string;
  };

export const useExcerciseOverviewStore = defineStore("excerciseOverviewStore", {
    state: () => ({
        text: "",
        excerciseList: [] as Exercise[],
        query: {} as ExerciseQuery
    }),
    getters: {
        filteredExercises(): Exercise[] {
            return this.excerciseList.filter(
                (x =>
                    (!this.query.name ||
                        x.name.toLowerCase().includes(this.query.name.toLowerCase())) &&
                    (!this.query.level ||
                        x.level?.toLowerCase().includes(this.query.level?.toLowerCase())) &&
                    (!this.query.category ||
                        x.category?.toLowerCase().includes(this.query.category?.toLowerCase())) &&
                    (!this.query.force ||
                        x.force?.toLowerCase().includes(this.query.force?.toLowerCase())) &&
                    (!this.query.primary ||
                        x.primaryMuscles.find(x => x.toString().toLowerCase().includes(this.query.primary.toLowerCase()))) &&
                    (!this.query.secondary ||
                        x.secondaryMuscles.find(x => x.toString().toLowerCase().includes(this.query.secondary.toLowerCase())))
                
            ))
        }
    },
    actions: {
        load() {
            this.excerciseList = getExercises();
        }
    }
});