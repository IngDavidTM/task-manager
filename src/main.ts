import { createApp } from 'vue'
import App from './App.vue'
import store from './store'
import TaskList from './components/taskList/TaskList.vue';

const app = createApp(App);

app.component('TaskList', TaskList);

app.use(store).mount('#app')
