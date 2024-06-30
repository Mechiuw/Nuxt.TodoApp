export const state = () => ({
    tasks: []
  });
  
  export const mutations = {
    ADD_TASK(state, task) {
      state.tasks = [task, ...state.tasks];
    },
    REMOVE_TASK(state, task) {
      const index = state.tasks.indexOf(task);
      if (index !== -1) {
        state.tasks.splice(index, 1);
      }
    },
    TOGGLE_TASK(state, task) {
       const foundTask = state.tasks.find(t => t === task);
       if(foundTask){
        foundTask.done = !foundTask.done;
        console.log(foundTask.done);
       }
    }
  };
  