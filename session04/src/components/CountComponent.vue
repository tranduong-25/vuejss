<template>
  <div>
    <h2>Count: {{ count }}</h2>
    <button @click="handleCount">Count</button>
    <button @click="handleRandom">Random</button>
  </div>
</template>

<script setup>
    const count = ref(0);
    const randomNumber = ref(1);

    const handleCount  = () => {
        count.value++;
    }

    const handleRandom = () => {
        const random =Math.ceil(Math.random()*10);
        randomNumber.value = random;
}
</script>

<style>

</style>