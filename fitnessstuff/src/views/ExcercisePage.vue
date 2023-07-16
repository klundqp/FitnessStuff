<script setup lang="ts">
import { onMounted } from 'vue';
import { useRoute } from 'vue-router';
import Container from "@/components/Bootstrap/layout/Container.vue";
import Col from "@/components/Bootstrap/layout/Col.vue";
import Row from "@/components/Bootstrap/layout/Row.vue";
import ExerciseDetailsTable from "@/components/ExerciseDetailsTable.vue";
import { useExcercisePageStore } from '../stores/exercisePageStore';
import type { TableField } from '@/components/Bootstrap/BaseTable.vue';

const store = useExcercisePageStore();
const route = useRoute();

onMounted(() => {
    store.excerciseId = route.params.id as string;
    store.load();
});

const fields: TableField[] = [
  {
    key: "category",
    label: "Category",
    thClass: "text-left",
    tdClass: "text-left vertical-center",
    sortable: false
  },
  {
    key: "force",
    label: "Force",
    thClass: "text-left",
    tdClass: "text-left vertical-center",
    sortable: false
  },
  {
    key: "level",
    label: "Level",
    thClass: "text-left",
    tdClass: "text-left vertical-center",
    sortable: false
  },
  {
    key: "primaryMuscles",
    label: "Primary Muscles",
    thClass: "text-left",
    tdClass: "text-left vertical-center",
    sortable: false
  },
  {
    key: "secondaryMuscles",
    label: "Secondary Muscles",
    thClass: "text-left",
    tdClass: "text-left vertical-center",
    sortable: false
  },
  {
    key: "equipment",
    label: "Equipment",
    thClass: "text-left",
    tdClass: "text-left vertical-center",
    sortable: false
  }
];

</script>

<template>
    <Container>
      <Row>
        <Col>
          <h1>Details for {{ store.excerciseId }}</h1>
        </Col>
      </Row>
      <Row>
        <Col>
          <h2>Instructions</h2>
          <ol v-for="instruction in store.exercise?.instructions">
            <li>{{ instruction }}</li>
          </ol>
        </Col>
      </Row>
      <Row>
        <Col :width=3>
          <h2>Properties</h2>
          <ExerciseDetailsTable :items="[store.exercise]" :fields="fields" :sortable="false"></ExerciseDetailsTable>
        </Col>
      </Row>
    </Container>
</template>
