import { defineComponent } from 'vue';
import { mapActions } from 'vuex';

interface DateTimeFormatOptions {
  year: 'numeric' | '2-digit',
  month: 'numeric' | '2-digit' | 'long' | 'short' | 'narrow',
  day: 'numeric' | '2-digit',
  hour12: boolean
}

export default defineComponent ({
  props: ['task'],
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
