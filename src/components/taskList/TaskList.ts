import TaskForm from '@/components/taskForm/TaskForm.vue';
import TaskItem from '@/components/taskItem/TaskItem.vue';
import { defineComponent } from 'vue';
import { mapActions, mapGetters } from 'vuex';

interface Task {
  id: number;
  title: string;
  description: string;
  completed: boolean;
  dueDate?: Date;
  category?: string;
}

export default defineComponent({
  components: {
    TaskForm,
    TaskItem,
  },
  data() {
    return {
      isAllTasksActive: true,
      isPendingTasksActive: false,
      isCompletedTasksActive: false,
    };
  },
  computed: {
    ...mapGetters(['allTasks', 'completedTasks', 'pendingTasks']),
    tasksDisplayed(): Task[]{
      if (this.isAllTasksActive) {
        return this.allTasks;
      } else if (this.isPendingTasksActive) {
        return this.pendingTasks;
      } else if (this.isCompletedTasksActive) {
        return this.completedTasks;
      }
      return [];
    }
  },
  mounted() {
    this.changeTasksDisplayed('all');
  },
  methods: {
    changeTasksDisplayed(filter: string) {
      this.isAllTasksActive = filter === 'all';
      this.isPendingTasksActive = filter === 'pending';
      this.isCompletedTasksActive = filter === 'completed';
    },
    ...mapActions(['deleteCompletedTasks', 'deleteAllTasks']),
  }
});
