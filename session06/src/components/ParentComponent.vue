<template>
  <div>
    <h1>Parent Component</h1>
    <h3>Username of ParentComponent: {{ username }}</h3>
    <p>_______________________________________________</p>
  <!-- su dung component con -->
  <!-- B2 trong component cha goi peops duoc khai bao ben con va truyen gia tri cho no -->
  <ChildrenComponent :usernameProps="username" :ageProps="age" :userInfoProps="userInfo"/>
  </div>
</template>

<script setup>
import ChildrenComponent from "./ChildrenComponent.vue";

const username ="Nguyen Van A"

//tao bien tuoi, truyen tu parentcomponent xuong childrencomponent
const age = 20;

const userInfo = {
    id: 1,
    name: "Nguyen Van B",
    age: 21,
}
</script>

<style>

</style>