<template>
  <!-- This section should be hidden by default and shown when there are todos -->
  <section class="main">
    <input id="toggle-all" class="toggle-all" type="checkbox" />
    <label for="toggle-all">Mark all as complete</label>
    <ul class="todo-list">
      <todos-item v-for="t in todos" :key="t.id" :todo="t"
        @toggle="$emit('toggle', t.id)"
        @destroy="$emit('destroy', t.id)"
        @update="$emit('update', $event)"
      ></todos-item>
    </ul>
  </section>
</template>

<script lang="ts">
import { Vue, Options } from "vue-class-component";
import TodosItem from "./TodosItem.vue";
import { TodosProps } from './props/TodosProps';

@Options({
  components: {
    TodosItem
  },
  emits: ['toggle', 'destroy', 'update']
})
export default class TodosMain extends Vue.with(TodosProps) {
}
</script>
