<script setup lang="ts">
import BaseTable, { TableField } from "@/components/Bootstrap/BaseTable.vue"
import type { Exercise } from "@/models/exercise";

const props = defineProps<{
  fields: TableField[];
  items: any[];
  stacked?: boolean;
  sortable?: boolean;
  sortBy?: string;
}>();

const capitalizeItem = (item: string|undefined): string => {
    return (item === undefined || item === null)? "" : item.charAt(0).toUpperCase() + item.slice(1);
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
            <div v-if="exercise.secondaryMuscles?.length > 0">
                <ul v-for="muscle in exercise.secondaryMuscles">
                    <li>{{ capitalizeItem(muscle) }}</li>
                </ul>
            </div>
            <div v-else></div>
        </template>
        <template v-slot:cell(equipment)="exercise: Exercise">
            <div v-if="exercise.equipment !== undefined">
                {{ capitalizeItem(exercise.equipment) }}
            </div>
        </template>
    </BaseTable>
</template>

<style lang="scss">
.link-text {
    color: #fff;
    text-decoration: none;
}
</style>