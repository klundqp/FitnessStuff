<script setup lang="ts">
import FilterLeft from "./icons/FilterLeft.vue";
import FilterAsc from "./icons/FilterAsc.vue";
import FilterDesc from "./icons/FilterDesc.vue";
import { ref } from "vue";

export type TableField =
  | string
  | {
      key: string;
      label: string;
      formatter?: (value: any, key: string, item: any) => string;
      tdClass?: string;
      thClass?: string;
      class?: string;
      sortable?: boolean;
    };

const props = defineProps<{
  fields: TableField[];
  items: any[];
  stacked?: boolean;
  sortable?: boolean;
  sortBy?: string;
}>();

const getFieldValue = (field: TableField, item: any) => {
  const key = typeof field === "string" ? field : field.key;
  const parts = key.split(".");
  const value = parts.reduce((currentValue, part) => {
    return currentValue[part];
  }, item);

  const formatter = typeof field === "string" ? undefined : field.formatter;

  return formatter ? formatter(value, key, item) : value;
};

const getFieldHeader = (field: TableField) => {
  if (typeof field === "string") {
    return field;
  }
  return field.label;
};

const getClasses = (field: TableField, isHeader?: boolean) => {
  if (typeof field === "string") return "";
  return [
    field.class || "",
    (isHeader ? field.thClass : field.tdClass) || "",
  ].join(" ");
};

const getKey = (field: TableField) => {
  if (typeof field === "string") return field;
  return field.key;
};

const isSortable = (field: TableField) => {
  if(typeof field === "string") return props.sortable;
  return props.sortable && field.sortable !== false
}

const sort = (rows: any[], sortBy: string | null) => {
  if (sortBy == null) return rows;

  const asc = sortBy.startsWith("-");
  const key = asc ? sortBy.substring(1) : sortBy;

  return [...rows].sort(({ [key]: a }, { [key]: b }) => {
    if (typeof a !== "string" && typeof b !== "string") {
      return asc ? b - a : a - b;
    }

    if (a > b) {
      return asc ? -1 : 1;
    }
    if (b > a) {
      return asc ? 1 : -1;
    }
    return 0;
  });
};

const sortBy = ref(props.sortBy || null);

const toggleSort = (field: TableField) => {
  const key = getKey(field);

  switch (sortBy.value) {
    case `-${key}`:
      sortBy.value = null;
      break;
    case key:
      sortBy.value = `-${key}`;
      break;
    default:
      sortBy.value = key;
      break;
  }
};
</script>

<template>
  <table class="table b-table-fixed">
    <thead v-if="!stacked">
      <tr>
        <th
          v-for="field in fields"
          scope="col"
          @click.prevent="toggleSort(field)"
          :class="getClasses(field, true)"
        >
          <slot :name="`header(${getKey(field)})`">
            {{ getFieldHeader(field) }}
          </slot>

          <div v-if="isSortable(field)">
            <FilterAsc v-if="sortBy === getKey(field)" />
            <FilterDesc v-else-if="sortBy === `-${getKey(field)}`" />
            <FilterLeft v-else />
          </div>
        </th>
      </tr>
    </thead>
    <tbody>
      <tr v-if="!stacked" v-for="item in sort(items, sortBy)">
        <td v-for="field in fields" :class="getClasses(field)">
          <slot :name="`cell(${getKey(field)})`" v-bind="item">
            {{ getFieldValue(field, item) }}
          </slot>
        </td>
      </tr>

      <tr v-if="stacked" v-for="field in fields">
        <th scope="col" :class="getClasses(field, true)">
          <slot :name="`header(${getKey(field)})`">
            {{ getFieldHeader(field) }}
          </slot>
        </th>
        <td v-for="item in sort(items, sortBy)" :class="getClasses(field)">
          <slot :name="`cell(${getKey(field)})`" v-bind="item">
            {{ getFieldValue(field, item) }}
          </slot>
        </td>
      </tr>
    </tbody>
    <tfoot>
      <slot name="foot"></slot>
    </tfoot>
  </table>
</template>

<style lang="scss">
.text-left{
  text-align: left;
}

.text-right{
  text-align: right;
}
</style>