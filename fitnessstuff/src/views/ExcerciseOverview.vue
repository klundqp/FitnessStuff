<script setup lang="ts">
import { onMounted } from 'vue';
import Container from "@/components/Bootstrap/layout/Container.vue";
import Col from "@/components/Bootstrap/layout/Col.vue";
import Row from "@/components/Bootstrap/layout/Row.vue";
import type { TableField } from "@/components/Bootstrap/BaseTable.vue";
import ExerciseTable from "@/components/ExerciseTable.vue";
import TextField from "@/components/Bootstrap/TextField.vue"
import { useExcerciseOverviewStore } from '../stores/excerciseOverviewStore';

const store = useExcerciseOverviewStore();

onMounted(() => {
  store.load();
});

const fields: TableField[] = [
  {
    key: "name",
    label: "Name",
    thClass: "text-left",
    tdClass: "text-left vertical-center"
  },
  {
    key: "category",
    label: "Category",
    thClass: "text-right",
    tdClass: "text-right vertical-center"
  },
  {
    key: "force",
    label: "Force",
    thClass: "text-right",
    tdClass: "text-right vertical-center"
  },
  {
    key: "level",
    label: "Level",
    thClass: "text-right",
    tdClass: "text-right vertical-center"
  },
  {
    key: "primaryMuscles",
    label: "Primary Muscles",
    thClass: "text-right",
    tdClass: "text-right vertical-center",
    sortable: false
  },
  {
    key: "secondaryMuscles",
    label: "Secondary Muscles",
    thClass: "text-right",
    tdClass: "text-right vertical-center",
    sortable: false
  },
  {
    key: "details",
    label: "Details",
    thClass: "text-right",
    tdClass: "text-right vertical-center",
    sortable: false
  }
];

</script>

<template>
  <Container>
    <Row>
      <Col>
        <h1>Excercise Overview</h1>
      </Col>
    </Row>
    <Row>
      <Col>
        <TextField
            v-model:value="store.query.name"
            name="name"
            placeholder="Exercise name"
          />
      </Col>
      <Col>
        <TextField
            v-model:value="store.query.category"
            name="category"
            placeholder="Exercise category"
          />
      </Col>
      <Col>
        <TextField
            v-model:value="store.query.force"
            name="force"
            placeholder="Exercise force"
          />
      </Col>
      <Col>
        <TextField
            v-model:value="store.query.level"
            name="level"
            placeholder="Exercise level"
          />
      </Col>
      <Col>
        <TextField
            v-model:value="store.query.primary"
            name="primaryMuscle"
            placeholder="Primary muscle"
          />
      </Col>
      <Col>
        <TextField
            v-model:value="store.query.secondary"
            name="secondaryMuscle"
            placeholder="Secondary muscle"
          />
      </Col>
    </Row>
    <Row>
      <ExerciseTable :items="store.filteredExercises" :fields="fields" sortable>
      </ExerciseTable>
    </Row>
  </Container>
</template>