import { defineComponent, PropType } from 'vue';
import { mapActions } from 'vuex';

interface DateTimeFormatOptions {
  year: 'numeric' | '2-digit',
  month: 'numeric' | '2-digit' | 'long' | 'short' | 'narrow',
  day: 'numeric' | '2-digit',
  hour12: boolean
}

interface Task {
  id: number;
  title: string;
  description: string;
  completed: boolean;
  dueDate?: Date;
  category?: string;
}

export default defineComponent ({
  props: {
    task: {
      type: Object as PropType<Task>,
      required: true,
    },
  },
  methods: {
    updateCheckbox() {
      this.updateTask({ ...this.task, completed: !this.task.completed });
    },
    formatDate(date: Date) {
      const options: DateTimeFormatOptions = { 
        year: 'numeric', 
        month: 'short', 
        day: 'numeric', 
        hour12: true
      };
      return new Date(date).toLocaleString('en-US', options);
    },
    ...mapActions(['deleteTask', 'updateTask'])
  },
});
