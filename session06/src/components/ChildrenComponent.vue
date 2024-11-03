<template>
  <div>
    <h1>children component</h1>
    <!-- B3 lay gia tri tu peops  -->
    <h1>username of childrenComponent: {{ props.usernameProps }}</h1>
    <h1>age of childrenComponent: {{ props.ageProps }}</h1>
    <h1>props of childrenComponent: {{ props.userInfoProps }}</h1>
  </div>
</template>

<script setup>
    //B1: Dinh nghia props trong component con 
    const props = defineProps(["username", "ageProps", "userInfoProps"])

    console.log("props", props);
</script>

<style>

</style>