<template>
     <ul v-for="task in tasks" :key="task.id">
          <SingleTask
               :task="task"
               :isReminder="task.reminder"
               @delete-task="this.$emit('delete-task', task.id)"
               @change-reminder="this.$emit('change-reminder', task.id)"
          />
     </ul>
</template>
<script>
import SingleTask from "./SingleTask.vue";

export default {
     // eslint-disable-next-line vue/multi-word-component-names
     name: "Tasks",
     props: {
          tasks: Array,
     },
     components: { SingleTask },
     // ||| Vue warns you to define an array of emits that need to pass up the prop chain
     emits: ["delete-task", "change-reminder"],
};
</script>
<style></style>
