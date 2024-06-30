<template>
    <div class="task-lists">
      <div :class="`task ${task.done ? 'completed' : ''}`">
        <div  class="content">
            {{ task.content }} - {{ task.done }}
        </div>
        <div class="button">
          <button @click="toggleDone">{{ task.done ? 'Undo' : 'Done' }}</button>
          <button @click="toggleDelete" class="delete">Delete</button>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    props: ['task'], 
    methods: {
      toggleDone() {
        this.$store.commit('TOGGLE_TASK', this.task);
      },
      toggleDelete() {
        this.$store.commit('REMOVE_TASK', this.task);
      }
    }
  };
  </script>
  
  <style scoped>
  .completed .content {
    text-decoration: line-through; /* Apply line-through style to content */
  }
  </style>
  