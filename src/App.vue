<template>
     <div class="container">
          <MainHeader
               title="Task Tracker"
               @toggle-add-task="onToggleAddTask"
               :showAddTask="showAddTask"
          />
          <div v-show="showAddTask">
               <AddTask @on-submit="onSubmit" />
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
     created() {
          this.tasks = [
               {
                    id: 1,
                    text: "Buy groceries",
                    day: new Date("2023-03-27"),
                    reminder: true,
               },
               {
                    id: 2,
                    text: "Take the dog for a walk",
                    day: new Date("2023-03-28"),
                    reminder: true,
               },
               {
                    id: 3,
                    text: "Do laundry",
                    day: new Date("2023-03-29"),
                    reminder: false,
               },
               {
                    id: 4,
                    text: "Pay bills",
                    day: new Date("2023-03-30"),
                    reminder: true,
               },
               {
                    id: 5,
                    text: "Clean the house",
                    day: new Date("2023-03-31"),
                    reminder: false,
               },
          ];

          console.log(this.tasks[1].name);
     },
     methods: {
          deleteTask(id) {
               // ||| kinda like resetting state in react, do not manipulate the state directly but rather pass it a completely new re-written value for it
               this.tasks = this.tasks.filter((task) => task.id !== id);
          },
          changeReminder(id) {
               this.tasks.forEach((task) => {
                    if (task.id === id) task.reminder = !task.reminder;
               });
          },
          onSubmit({ day, text, reminder }) {
               let newTaskObj = { day, text, reminder, id: Math.random() };
               this.tasks = [...this.tasks, newTaskObj];
          },
          onToggleAddTask() {
               this.showAddTask = !this.showAddTask;
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
