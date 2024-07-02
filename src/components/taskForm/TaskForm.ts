import { defineComponent } from 'vue';
import { mapActions } from 'vuex';

export default defineComponent({
  data() {
    return {
      title: '',
      description:'',
      dueDate: new Date().toISOString().substr(0, 10)
    };
  },
  methods: {
    submitTask() {
      const newTask = {
        id: Date.now(),
        title: this.title,
        description: this.description,
        completed: false,
        dueDate: this.dueDate ? new Date(this.dueDate) : undefined
      };
      this.addTask(newTask);
      this.title = '';
      this.description = '';
      this.dueDate = new Date().toISOString().substr(0, 10);
    },
    ...mapActions(['addTask'])
  }
});
