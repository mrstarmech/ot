<script setup lang="ts">
defineProps({
  src: String,
  alt: String,
  annot: String,
});
</script>

<template>
  <div class="article-image">
    <img :src="src" :alt="alt" />
    <p v-if="annot" class="image-annot">
      {{ annot }}
    </p>
  </div>
</template>

<style lang="scss">
.article-image {
  max-width: 1000px;
  font-family: var(--font-mont);
  margin: 0 auto 10px;
  box-shadow: 0 0 6px var(--pale-main-color);
  padding: 1px;
  img {
    display: block;
    width: 100%;
  }
  .image-annot {
    font-size: var(--small-text-size);
    font-weight: 700;
    text-align: center;
    padding: 0 5px;
    line-height: 1.15;
  }
}
</style>
