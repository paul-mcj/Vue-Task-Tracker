<template>
     <header>
          <h1>{{ title }}</h1>
          <Button text="Add Task" color="green" @click="onAdd()" />
     </header>
</template>

<script>
import Button from "./Button.vue";

export default {
     name: "MainHeader",
     props: { title: String },
     components: { Button },
     methods: {
          onAdd() {
               console.log("add");
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
