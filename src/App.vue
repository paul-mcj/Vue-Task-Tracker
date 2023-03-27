<template>
     <div class="container">
          <MainHeader
               title="Task Tracker"
               @toggle-add-task="onToggleAddTask"
               :showAddTask="showAddTask"
          />
          <div v-show="showAddTask">
               <AddTask @on-submit="onAddTask" />
          </div>
          <Tasks
               :tasks="tasks"
               @delete-task="deleteTask"
               @change-reminder="changeReminder"
          />
     </div>
</template>

<script>
import MainHeader from "./components/MainHeader.vue";
import Tasks from "./components/Tasks.vue";
import AddTask from "./components/AddTask.vue";

export default {
     name: "App",
     components: { MainHeader, Tasks, AddTask },
     // ||| this data method is basically a React return object in a component
     data() {
          return {
               tasks: [],
               showAddTask: false,
          };
     },
     // ||| like useEffect hook
     async created() {
          this.tasks = await this.fetchTasks();
     },
     methods: {
          onToggleAddTask() {
               this.showAddTask = !this.showAddTask;
          },
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

<style>
@import url("https://fonts.googleapis.com/css2?family=Poppins:wght@300;400&display=swap");
* {
     box-sizing: border-box;
     margin: 0;
     padding: 0;
}
body {
     font-family: "Poppins", sans-serif;
}
.container {
     max-width: 500px;
     margin: 30px auto;
     overflow: auto;
     min-height: 300px;
     border: 1px solid steelblue;
     padding: 30px;
     border-radius: 5px;
}
.btn {
     display: inline-block;
     background: #000;
     color: #fff;
     border: none;
     padding: 10px 20px;
     margin: 5px;
     border-radius: 5px;
     cursor: pointer;
     text-decoration: none;
     font-size: 15px;
     font-family: inherit;
}
.btn:focus {
     outline: none;
}
.btn:active {
     transform: scale(0.98);
}
.btn-block {
     display: block;
     width: 100%;
}
</style>
