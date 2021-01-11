<template>
  <!-- This footer should be hidden by default and shown when there are todos -->
  <footer class="footer">
    <!-- This should be `0 items left` by default -->
    <span class="todo-count"><strong>{{ activeCount }}</strong> item left</span>
    <!-- Remove this if you don't implement routing -->
    <ul class="filters">
      <li>
        <a class="selected" href="#/">All</a>
      </li>
      <li>
        <a href="#/active">Active</a>
      </li>
      <li>
        <a href="#/completed">Completed</a>
      </li>
    </ul>
    <!-- Hidden if no completed items are left ↓ -->
    <button class="clear-completed">Clear completed</button>
  </footer>
</template>

<script lang="ts">
import { Vue } from "vue-class-component";
import { TodosProps } from "./props/TodosProps";

export default class TodosActionbar extends Vue.with(TodosProps) {
  get activeCount(): number {
    return this.todos.reduce( (count, t) => t.completed ? count : count + 1, 0);
  }
}
</script>
