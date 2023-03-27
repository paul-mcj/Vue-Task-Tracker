<template>
     <AddTask v-show="showAddTask" @on-submit="onAddTask" />
     <Tasks
          :tasks="tasks"
          @delete-task="deleteTask"
          @change-reminder="changeReminder"
     />
</template>
<script>
import Tasks from "../components/Tasks.vue";
import AddTask from "../components/AddTask.vue";

export default {
     // eslint-disable-next-line vue/multi-word-component-names
     name: "Home",
     props: {
          showAddTask: Boolean,
     },
     components: { Tasks, AddTask },
     data() {
          return {
               tasks: [],
          };
     },
     // ||| like useEffect hook
     async created() {
          this.tasks = await this.fetchTasks();
     },
     methods: {
          async fetchTasks() {
               const res = await fetch("api/tasks");
               const data = await res.json();
               return data;
          },
          async fetchSingleTask(id) {
               const res = await fetch(`api/tasks/${id}`);
               const data = await res.json();
               return data;
          },
          async onAddTask({ day, text, reminder }) {
               const res = await fetch("api/tasks", {
                    method: "POST",
                    headers: { "Content-type": "application/json" },
                    body: JSON.stringify({ day, text, reminder }),
               });
               const data = await res.json();
               this.tasks = [...this.tasks, data];
          },
          async deleteTask(id) {
               const res = await fetch(`api/tasks/${id}`, {
                    method: "DELETE",
               });
               res.status === 200
                    ? // ||| kinda like resetting state in react, do not manipulate the state directly but rather pass it a completely new re-written value for it
                      (this.tasks = this.tasks.filter((task) => task.id !== id))
                    : alert("Error while deleting task");
          },
          async changeReminder(id) {
               const targetTask = await this.fetchSingleTask(id);
               const updatedTask = {
                    ...targetTask,
                    reminder: !targetTask.reminder,
               };
               const res = await fetch(`api/tasks/${id}`, {
                    method: "PUT",
                    headers: { "Content-type": "application/json" },
                    body: JSON.stringify(updatedTask),
               });
               const data = await res.json();
               // ||| Just like when dealing with JSX list items, data can be mapped easily:
               this.tasks = this.tasks.map((task) =>
                    task.id === id ? { ...task, reminder: data.reminder } : task
               );
          },
     },
};
</script>
<style></style>
