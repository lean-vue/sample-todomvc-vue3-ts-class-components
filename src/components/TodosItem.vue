<template>
  <li :class="{ completed: todo.completed, editing: editMode }">
    <div class="view">
      <input class="toggle" type="checkbox"
        :checked="todo.completed" @change="$emit('toggle')">
      <label @dblclick="beginEdit">{{ todo.title }}</label>
      <button class="destroy" @click="$emit('destroy')"></button>
    </div>
    <input ref="fld" class="edit" v-model="editTitle"
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
    this.$nextTick(() => {
      (this.$refs.fld as HTMLInputElement).focus();
    });
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
