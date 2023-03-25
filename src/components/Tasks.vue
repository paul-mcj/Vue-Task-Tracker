<template>
     <ul v-for="task in tasks" :key="task.id">
          <SingleTask :task="task" />
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
};
</script>
<style></style>
