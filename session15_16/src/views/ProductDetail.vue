<template>
    <div>
    <h1>Product Detail</h1>
    Chi tiết sản phẩm số: {{ id }}
</div>
</template>

<script setup>
import { useRoute } from 'vue-router';

    const route = useRoute();
    const id = route.params.id
</script>

<style>

</style>