<template>
  <!-- This section should be hidden by default and shown when there are todos -->
  <section class="main">
    <input id="toggle-all" class="toggle-all" type="checkbox" />
    <label for="toggle-all">Mark all as complete</label>
    <ul class="todo-list">
      <todos-item v-for="t in todos" :key="t.id"></todos-item>
    </ul>
  </section>
</template>

<script lang="ts">
import { Todo } from "@/model/todo";
import { Vue, Options } from "vue-class-component";
import TodosItem from "./TodosItem.vue";

class TodosProps {
  todos!: Todo[];
}

@Options({
  components: {
    TodosItem
  }
})
export default class TodosMain extends Vue.with(TodosProps) {
}
</script>
