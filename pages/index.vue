<template>
  <main>
    <div>
      <Form/>
    </div>
  </main>
</template>

<script>
import Task from '../components/Task.vue';
import Form from './Form.vue';

export default {
  components:{
    Task : Task,
    Form : Form
  }
}
</script>

<style>

</style>