<script setup lang="ts">
import { onMounted } from 'vue';
import Container from "@/components/Bootstrap/layout/Container.vue";
import Col from "@/components/Bootstrap/layout/Col.vue";
import Row from "@/components/Bootstrap/layout/Row.vue";
import type { TableField } from "@/components/Bootstrap/BaseTable.vue";
import ExerciseTable from "@/components/ExerciseTable.vue";
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
        <input type="text" v-model="store.text" placeholder="Excercise">
      </Col>
    </Row>
    <Row>
      <ExerciseTable :items="store.excerciseList" :fields="fields" sortable>
      </ExerciseTable>
    </Row>
  </Container>
</template>