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
    label: "Navn"
  },
  {
    key: "category",
    label: "Kategori"
  },
  {
    key: "force",
    label: "Type",
    thClass: "text-right",
    tdClass: "text-right"
  },
  {
    key: "level",
    label: "Sværhedsgrad",
    thClass: "text-right",
    tdClass: "text-right"
  },
  {
    key: "primaryMuscles",
    label: "Primære muskelgrupper",
    thClass: "text-right",
    tdClass: "text-right",
    sortable: false
  },
  {
    key: "secondaryMuscles",
    label: "Sekundære muskelgrupper",
    thClass: "text-right",
    tdClass: "text-right",
    sortable: false
  }
];

</script>

<template>
  <Container>
    <Row>
      <Col>
        <h1>ExcerciseOverview</h1>
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