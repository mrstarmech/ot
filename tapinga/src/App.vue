<script setup lang="ts">
import HeaderComponent from './components/HeaderComponent.vue';
import MainComponent from './components/MainComponent.vue';
</script>

<template>
<HeaderComponent />
<MainComponent />
</template>

<style>
@import "@/assets/base.css";
@import 'normalize.css';
* {
    box-sizing: border-box;
}
body {
    background: var(--background);
}
</style>
