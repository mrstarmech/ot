<script setup lang="ts">
import ArticleHeadComponent from "./ArticleHeadComponent.vue";
import ArticleContentComponent from "./ArticleContentComponent.vue";
import FormComponent2 from "./FormComponent2.vue";
const emit = defineEmits(["show_form"]);
</script>

<template>
  <div class="container">
    <article class="content">
      <ArticleHeadComponent />
      <ArticleContentComponent />
    </article>
    <FormComponent2 />
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
