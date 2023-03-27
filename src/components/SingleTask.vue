<template>
     <div :class="[task.reminder ? 'reminderActive' : '']">
          <li>{{ task.text }}</li>
          <p>{{ task.day }}</p>
          <Button
               :text="isReminder ? 'Reminder is off' : 'Reminder is on'"
               :color="isReminder ? 'red' : 'green'"
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
          isReminder: Boolean,
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
     border-right: 5px solid green;
}
</style>
