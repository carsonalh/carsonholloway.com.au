<script setup lang="ts">
import { ref } from 'vue'

const search = ref('')
</script>

<template>
    <input placeholder="search here..." v-model="search" />
    <p>{{ search }}</p>
</template>
