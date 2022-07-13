<script setup lang="ts">
import HeaderComponent from "./components/HeaderComponent.vue";
import ArticleComponent from "./components/ArticleComponent.vue";
import PopUpComponent from "./components/PopUpComponent.vue";
import CommentsComponent from "./components/CommentsComponent.vue";
const scroll = function () {
  document.querySelector('#scroll-anchor-form')?.scrollIntoView({behavior:'smooth'});
}
const scroll2 = function () {
  document.querySelector('#scroll-anchor-form2')?.scrollIntoView({behavior:'smooth'});
}
</script>

<template>
  <HeaderComponent />
  <ArticleComponent @show_form="scroll" />
  <CommentsComponent @show_form="scroll" @show_form2="scroll2" />
  <PopUpComponent />
</template>

<style lang="scss"></style>
