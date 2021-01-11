<template>
  <!-- These are here just to show the structure of the list items -->
  <!-- List items should get the class `editing` when editing and `completed` when marked as completed -->
  <li :class="{ completed: todo.completed }">
    <div class="view">
      <input class="toggle" type="checkbox"
        :checked="todo.completed" @change="$emit('toggle')">
      <label>{{ todo.title }}</label>
      <button class="destroy" @click="$emit('destroy')"></button>
    </div>
    <input class="edit" value="Create a TodoMVC template" />
  </li>
</template>

<script lang="ts">
import { Vue, Options } from "vue-class-component";
import { TodoProps } from './props/TodoProps';

@Options({
  emits: ['toggle', 'destroy', 'update']
})
export default class TodosItem extends Vue.with(TodoProps) {}
</script>
