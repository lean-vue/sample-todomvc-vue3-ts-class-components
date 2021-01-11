<template>
  <todos-shell></todos-shell>
  <footer class="info">
    <p>Double-click to edit a todo</p>
    <p>Created by <a :href="author.url">{{ author.name }}</a></p>
    <p>Part of <a href="http://todomvc.com">TodoMVC</a></p>
  </footer>
</template>

<script lang="ts">
import { Vue, Options } from "vue-class-component";
import TodosShell from './components/TodosShell.vue';

@Options({
  components: {
    TodosShell
  }
})
export default class App extends Vue {
  author = {
    name: 'Micha Alt',
    url: 'https://lean-stack.de'
  }
}
</script>
