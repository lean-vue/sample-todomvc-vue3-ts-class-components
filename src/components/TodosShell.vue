<template>
  <section class="todoapp">
    <header class="header">
      <h1>todos</h1>
      <todos-input @create="createTodo"></todos-input>
    </header>
    <todos-main :todos="todos"
      @toggle="toggleTodo"
      @destroy="deleteTodo"
      @update="updateTodo"
    ></todos-main>
    <todos-actionbar :todos="todos"></todos-actionbar>
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

  async createTodo(title: string) {
    const todo = await store.create(title);
    this.todos.push(todo);
  }

  async toggleTodo(id: number) {
    const todo = this.todos.find(t => t.id === id) as Todo;
    await store.update(id, { completed: !todo.completed });
    todo.completed = !todo.completed;
  }

  async deleteTodo(id: number) {
    await store.remove(id);
    this.todos = this.todos.filter(t => t.id !== id);
  }

  async updateTodo({ id, title }: {id: number; title: string}) {
    const todo = await store.update(id, { title });
    this.todos = this.todos.map(t => t.id !== id ? t : todo );
  }
}
</script>
