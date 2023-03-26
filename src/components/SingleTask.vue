<template>
     <div :class="[task.reminder ? 'reminderActive' : '']">
          <li>{{ task.text }}</li>
          <p>{{ task.day }}</p>
          <Button
               text="Turn reminder [task.reminder ? 'off' : 'on']"
               @click="$emit('change-reminder', task.id)"
          />
          <Button
               text="Delete"
               color="red"
               @click="$emit('delete-task', task.id)"
          />
     </div>
</template>
<script>
import Button from "./Button.vue";

export default {
     name: "SingleTask",
     props: {
          task: Object,
     },
     components: { Button },
     //  methods: {
     //       onChangeReminder(id) {
     //            this.$emit("change-reminder", id);
     //       },
     //       onDelete(id) {
     //            //||| emit is basically Vue's way of passing props between child and parent
     //            this.$emit("delete-task", id);
     //       },
     //  },
};
</script>
<style>
.reminderActive {
     background-color: aqua;
}
</style>
