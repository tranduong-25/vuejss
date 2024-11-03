<template>
  <div>
    <h1>Oneway data binding</h1>
    <h3>Username: {{ userName }}</h3>
    <input type="text" :value="userName">
    <button @click="handleChangeName">Change Name</button>
  </div>
</template>

<script setup>
import { ref } from "vue";

const userName = ref("Nguyen Van A");
const handleChangeName = () => {
    userName.value = "Nguyen Van A";
  
}
</script>

<style>

</style>