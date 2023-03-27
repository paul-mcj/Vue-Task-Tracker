<template>
     <header>
          <h1>{{ title }}</h1>
          <Button
               v-show="homePage"
               :text="showAddTask ? 'Close' : 'Add Task'"
               :color="showAddTask ? 'red' : 'green'"
               @click="$emit('toggle-add-task')"
          />
     </header>
</template>

<script>
import Button from "./Button.vue";

export default {
     name: "MainHeader",
     props: { title: String, showAddTask: Boolean },
     components: { Button },
     // ||| computed allows you to perform "reactive" processes
     computed: {
          homePage() {
               if (this.$route.path === "/") {
                    return true;
               } else {
                    return false;
               }
          },
     },
};
</script>

<style scoped>
header {
     display: flex;
     justify-content: space-between;
     align-items: center;
     margin-bottom: 20px;
}
</style>
