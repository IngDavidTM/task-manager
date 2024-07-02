import { createStore } from 'vuex';

interface Task {
  id: number;
  title: string;
  description: string;
  completed: boolean;
  dueDate?: Date;
  category?: string;
}

interface State {
  tasks: Task[];
}

const savedTasks = localStorage.getItem('tasks');
const initialState: State = {
  tasks: savedTasks ? JSON.parse(savedTasks) : []
};
const store = createStore<State>({
  state: initialState,
  mutations: {
    addTask(state, task: Task) {
      state.tasks.push(task);
      localStorage.setItem('tasks', JSON.stringify(state.tasks));
    },
    updateTask(state, updatedTask: Task) {
      const index = state.tasks.findIndex(task => task.id === updatedTask.id);
      if (index !== -1) {
        state.tasks[index] = updatedTask;
        localStorage.setItem('tasks', JSON.stringify(state.tasks));
      }
    },
    deleteTask(state, taskId: number) {
      state.tasks = state.tasks.filter(task => task.id !== taskId);
      localStorage.setItem('tasks', JSON.stringify(state.tasks));
    },
  },
  actions: {
    addTask({ commit }, task: Task) {
      commit('addTask', task);
    },
    updateTask({ commit }, task: Task) {
      commit('updateTask', task);
    },
    deleteTask({ commit }, taskId: number) {
      commit('deleteTask', taskId);
    },
    deleteCompletedTasks({ state, commit }) {
      state.tasks
        .filter(task => task.completed)
        .forEach(task => commit('deleteTask', task.id));
    },
    deleteAllTasks({ state, commit }) {
      state.tasks.forEach(task => commit('deleteTask', task.id));
    }
  },
  getters: {
    allTasks: (state) => state.tasks,
    completedTasks: (state) => state.tasks.filter(task => task.completed),
    pendingTasks: (state) => state.tasks.filter(task => !task.completed),
  }
});

export default store;
