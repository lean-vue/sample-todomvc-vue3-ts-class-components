<template>
  <input v-model="title" @keyup.enter="createTodo" class="new-todo" placeholder="What needs to be done?" autofocus />
</template>

<script lang="ts">
import { Vue, Options } from "vue-class-component";

@Options({ emits: ['create']})
export default class TodosInput extends Vue {
  title = '';

  createTodo() {
    this.title = this.title.trim();

    if (this.title) {
      this.$emit('create', this.title);
      this.title = '';
    }
  }
}
</script>
