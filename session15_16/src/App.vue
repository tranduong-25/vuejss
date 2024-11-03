<script setup>
import { useRouter } from 'vue-router';

  const router = useRouter();
  const goToHome=()=>{
    router.push("/");
  }
  const goToAbout=()=>{
    router.push({name:'about'});
  }
  const goToContact=()=>{
    router.replace({name:'contact'});
  }
</script>

<template>
  <div>
    <!-- <nav>
      <router-link to="/">Home</router-link>
      <router-link :to="{name: 'about'}">About</router-link>
      <router-link to="/contact">Contact</router-link>
    </nav> -->
    <nav>
      <button @click="goToHome">Home</button>
      <button @click="goToAbout">About</button>
      <button @click="goToContact">Contact</button>
    </nav>
  <router-view/>
</div>
</template>

<style scoped>


</style>
