<template>
     <div :class="[task.reminder ? 'reminderActive' : '']">
          <li>{{ task.name }}</li>
          <p>{{ task.task }}</p>
          <Button text="Turn reminder on/off" @onClickFn="onChangeReminder()" />
          <Button text="Delete" onClick="" />
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
     methods: {
          onChangeReminder() {
               console.log("hhhh");
          },
     },
};
</script>
<style>
.reminderActive {
     background-color: aqua;
}
</style>
