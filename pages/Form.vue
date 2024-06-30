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
        <input  
        type="text" 
        placeholder="insert day" 
        v-model="newDay" 
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
        newTask : '',
        newDay : ''
      }
    },
    computed:{
      ...mapState(['tasks']),
    },
    methods:{
      addTask(){
        if(this.newTask && this.newDay){
            const taskWithDay = {
                content: this.newTask,
                day : this.newDay,
            }
          this.$store.commit('ADD_TASK',taskWithDay)
          this.newTask = ''
          this.newDay = ''
        }
      }
     }
  }
  </script>
  
  <style>
    .main-container-index{
        display: flex;
        flex-direction: column;
        gap: 10px;
        text-align: center;
    }
  </style>