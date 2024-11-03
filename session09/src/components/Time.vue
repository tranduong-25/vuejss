<template>
    <h1>Time:{{ time }}</h1>
  </template>
  
  <script setup>
  import { onBeforeUnmount, onBeforeUpdate, onMounted, onUnmounted, onUpdated , ref } from 'vue';
  const time = ref(0);
  let timerid;

  onBeforeUnmount(()=>{
      console.log("Component before mount");
      
  });
  onMounted(()=>{
    setInterval(() => {
        time.value++;
    },1000)
      console.log("Component mounted");
      
  });
  onBeforeUpdate(()=>{
      console.log("Component before update");
      
  });
  onUpdated(()=>{
      console.log("Component update");
      
  });
  onBeforeUnmount(()=>{
      clearInterval(timerid);
      console.log("Component before unmount");
      
  });
  onUnmounted(()=>{
      console.log("Component unmounted");
      
  });
  </script>
  
  <style>
  
  </style>