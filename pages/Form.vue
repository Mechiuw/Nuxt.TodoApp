<template>
    <main>
      <div class="main-container-index">
        <h1>TASK BOARD</h1>
        <p>create list of tasks</p>
  
        <input  
        type="text" 
        placeholder="insert task" 
        v-model="newTask" 
        @keypress.enter="addTask"
        />
        <button @click="addTask" class="btn btn-dark">Submit</button>
      </div>
  
      <div class="tasks">
        <Task 
        v-for="(task,i) in $store.state.tasks"
        :key="i"
        :task="task" />
      </div>
    </main>
  </template>
  
  <script>
  import {mapState} from 'vuex';
  import Task from '../components/Task.vue';
  
  export default {
    components:{
      Task
    }, 
    data(){
      return {
        newTask : ''
      }
    },
    computed:{
      ...mapState(['tasks'])
    },
    methods:{
      addTask(){
        if(this.newTask){
          this.$store.commit('ADD_TASK',this.newTask)
          this.newTask = ''
        }
      }
     }
  }
  </script>
  
  <style>
    
  </style>