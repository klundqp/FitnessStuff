<script setup lang="ts">
import BaseTable, { TableField } from "@/components/Bootstrap/BaseTable.vue"
import AppLink from "@/components/Atoms/AppLink.vue"
import type { Exercise } from "@/models/exercise";

const props = defineProps<{
    fields: TableField[];
    items: any[];
    stacked?: boolean;
    sortable?: boolean;
    sortBy?: string;
}>();

const capitalizeItem = (item: string): string => {
    return item === null ? "" : item.charAt(0).toUpperCase() + item.slice(1);
}

const replaceSlash = (item: string): string => {
    return item === null ? "" : item.replace("/", "-");
}

</script>

<template>
    <BaseTable :items="items" :fields="fields" sortable>
        <template v-slot:cell(force)="exercise: Exercise">
            {{ exercise.force !== undefined ? capitalizeItem(exercise.force) : "" }}
        </template>
        <template v-slot:cell(level)="exercise: Exercise">
            {{ capitalizeItem(exercise.level) }}
        </template>
        <template v-slot:cell(category)="exercise: Exercise">
            {{ capitalizeItem(exercise.category) }}
        </template>
        <template v-slot:cell(primaryMuscles)="exercise: Exercise">
            <div v-for="muscle in exercise.primaryMuscles">
                {{ capitalizeItem(muscle) }}
            </div>
        </template>
        <template v-slot:cell(secondaryMuscles)="exercise: Exercise">
            <div v-if="exercise.secondaryMuscles.length > 0">
                <div v-for="muscle in exercise.secondaryMuscles">
                    {{ capitalizeItem(muscle) }}
                </div>
            </div>
            <div v-else></div>
        </template>
        <template v-slot:cell(details)="exercise: Exercise">
            <AppLink route-name="ExercisePage" :id="replaceSlash(exercise.name)" text="Details" variant="primary"></AppLink>
        </template>
    </BaseTable>
</template>

<style lang="scss">
.link-text {
    color: #fff;
    text-decoration: none;
}
</style>