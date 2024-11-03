<template>
<div>
  <h1>children component</h1>
  <input type="text" v-model="inputValue">
  <h2>Count: {{ count }}</h2>
  <button @click="handleCount">Count</button>
</div>
</template>

<script setup>

import { onBeforeMount, onBeforeUnmount, onBeforeUpdate, onMounted, onUpdated, ref } from 'vue';

const count = ref(0);
const inputValue = ref("");
const handleCount = () => {
    count.value++;
}

onBeforeMount(() => {
  count.value = 5;
  console.log("Component before mount");
});

onMounted(() => {
    //const count = 6;
    console.log("Component mounted");
});

onBeforeUpdate(() => {
    document.title = inputValue.value;
    console.log("Before update");
});

onUpdated(() => {
    inputValue.value ="Nguyen van A"
    console.log("Component Update");
});

//các phương thức trong giai đoạn unMount

onBeforeUnmount(() => {
    console.log("Component Befor Unmount");
});

onMounted(() => {
    console.log("Component Mounted");
});
</script>

<style>

</style>