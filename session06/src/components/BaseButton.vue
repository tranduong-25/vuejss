<template>
  <button>{{ props.title }}</button>
</template>

<script setup>
const props = defineProps ([
    title, {
        default :"click me1",
        type: string,
        required: true,
    },
]);
console.log("Props: ", props);
</script>

<style>

</style>