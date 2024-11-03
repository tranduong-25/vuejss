<template>
<div v-bind="divAttributes">Container

  <img v-bind:src="url" alt="">

  <button v-bind:disabled="isDisabled">Click me</button>

  <input type="text" b-bind:disabled="isEnter">

  <p v-bind="paragraphAttributes">Nội dung</p>

  <div v-bind:class="{ textRed: isTextRed }">Hello world</div>

</div>
</template>

<script setup>
  const url=
  "https://devo.vn/wp-content/uploads/2023/01/meo-cam-dao.jpg";
  const isDisabled = true;

  const enter = true;

  const divAttributes ={
    id: "container-id",
    class: "container-class"
  }
  const paragraphAttributes = {
    id: "paragraph",
    area: "paragraph",
  }
</script>

<style>
.text-rerd{
  color: red,
}
</style>
