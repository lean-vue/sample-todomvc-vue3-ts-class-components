<template>
  <!-- This section should be hidden by default and shown when there are todos -->
  <section class="main">
    <input id="toggle-all" class="toggle-all" type="checkbox" />
    <label for="toggle-all">Mark all as complete</label>
    <ul class="todo-list">
      <todos-item></todos-item>
    </ul>
  </section>
</template>

<script lang="ts">
import { Vue, Options } from "vue-class-component";
import TodosItem from "./TodosItem.vue";

@Options({
  components: {
    TodosItem
  }
})
export default class TodosMain extends Vue {}
</script>
