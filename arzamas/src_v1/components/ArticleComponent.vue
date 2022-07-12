<script setup lang="ts">
import ArticleHeadComponent from "./ArticleHeadComponent.vue";
import ArticleContentComponent from "./ArticleContentComponent.vue";
import FormComponent from "./FormComponent.vue";
const emit = defineEmits(["show_fomr"]);
</script>

<template>
  <div class="container">
    <article class="content">
      <ArticleHeadComponent />
      <ArticleContentComponent />
    </article>
    <FormComponent @show_form="emit('show_fomr')" />
  </div>
</template>

<style lang="scss">
.container {
  max-width: 1080px;
  width: 100%;
  padding: 0 15px;
  margin: 0 auto;
}
</style>
