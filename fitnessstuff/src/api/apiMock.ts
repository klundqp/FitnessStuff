import { exercises } from "@/data/exercises.json"
import type { Exercise } from "@/models/exercise";

export function getExercises(): Exercise[] {
    return exercises as Exercise[];
}

export function getExerciseByName(name: string): Exercise|null {
    const exerciseList = getExercises();
    return exerciseList.find(exercises => exercises.name === name) ?? null;
}