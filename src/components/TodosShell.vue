<template>
  <section class="todoapp">
    <header class="header">
      <h1>todos</h1>
      <todos-input></todos-input>
    </header>
    <todos-main :todos="todos"></todos-main>
    <todos-actionbar></todos-actionbar>
  </section>
</template>

<script lang="ts">
import { Vue, Options } from "vue-class-component";
import TodosInput from "./TodosInput.vue";
import TodosMain from "./TodosMain.vue";
import TodosActionbar from "./TodosActionbar.vue";
import store from '../model/local.store';
import { Todo } from "@/model/todo";

@Options({
  components: {
    TodosInput,
    TodosMain,
    TodosActionbar,
  },
  async created() {
    this.todos = await store.getAll();
  }
})
export default class TodosShell extends Vue {
  todos: Todo[] = [];
}
</script>
