<template>
  <!-- These are here just to show the structure of the list items -->
  <!-- List items should get the class `editing` when editing and `completed` when marked as completed -->
  <li :class="{ completed: todo.completed, editing: editMode }">
    <div class="view">
      <input class="toggle" type="checkbox"
        :checked="todo.completed" @change="$emit('toggle')">
      <label @dblclick="beginEdit">{{ todo.title }}</label>
      <button class="destroy" @click="$emit('destroy')"></button>
    </div>
    <input class="edit" v-model="editTitle"
      @keyup.enter="commitEdit"
      @blur="commitEdit"
      @keyup.esc="cancelEdit"
    />
  </li>
</template>

<script lang="ts">
import { Vue, Options } from "vue-class-component";
import { TodoProps } from './props/TodoProps';

@Options({
  emits: ['toggle', 'destroy', 'update']
})
export default class TodosItem extends Vue.with(TodoProps) {
  editMode = false;
  editTitle = '';

  beginEdit() {
    this.editMode = true;
    this.editTitle = this.todo.title;
  }

  cancelEdit() {
    this.editMode = false;
  }

  commitEdit() {
    if (this.editMode) {
      if (this.editTitle) {
        this.$emit('update', { id: this.todo.id, title: this.editTitle });
      } else {
        this.$emit('destroy', this.todo.id);
      }
      this.editMode = false;
    }
  }
}
</script>
