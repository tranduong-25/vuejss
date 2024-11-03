<template>
<div>
  <button v-on:click="handleClick">Click me</button>
  <button v-on:click="handleDelete(1)">Delete</button>
  <button @click="handlleGetEvent"> Event Info</button>
  <form @submit.prevent="handleSubmit">
    <button type="submit">Submit</button>
  </form>

  <button @keydown.esc="handleCloseForm">Dong form</button>
</div>
</template>

<script setup>
const handleClick = () => {
    console.log("Clicked");
};

const handleDelete = (id) => {
    console.log("id", id);
};

const handlleGetEvent = (event) => {
    console.log("Event", event);
};
const handleSubmit = () => {
    alert("Submited");
};
//duoc kich hoat khi nguoi dung dong form hoac nhan nut esc
const handleCloseForm = () => {
    alert("Close");
}
</script>

<style>

</style>