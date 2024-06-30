<template>
    <div :class="`task ${task.done ? 'completed' : ''}`">
        <div class="content" >
            {{ task.content }}
        </div>
        <div class="button">
            <button @click="toggleDone">{{ task.done ? 'Undo' : 'Done' }}</button>
            <button @click="toggleDelete" class="delete">Delete</button>
        </div>
    </div>
</template>

<script>
    export default {
        props : ['task'],
        methods:{
            toggleDone(){
                this.$store.commit('TOGGLE_TASK',this.task)
            },
            toggleDelete(){
                this.$store.commit('DELETE_TASK',this.task)
            }
        }
    }
</script>
<style>
.content{
    width: 100%;
    height: 100%;
    background-color: lightblue;
    color: white;
}
</style>