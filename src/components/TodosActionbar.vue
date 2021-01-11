<template>
  <footer v-if="todos.length > 0" class="footer">
    <span class="todo-count"><strong>{{ activeCount }}</strong> {{ activeCount === 1 ? 'item' : 'items' }} left</span>
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
