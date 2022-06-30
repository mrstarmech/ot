<script setup lang="ts">
import HeaderComponent from "./components/HeaderComponent.vue";
import ArticleComponent from "./components/ArticleComponent.vue";
import PopUpComponent from "./components/PopUpComponent.vue";
import CommentsComponent from "./components/CommentsComponent.vue";
import OrderFormModal from "./components/OrderFormModal.vue";
import { reactive } from "vue";
const modal_shown = reactive({state:false});
function close() {
  modal_shown.state = false;
  window.lmt_config.modal_shown = false;
}
</script>

<template>
  <HeaderComponent />
  <ArticleComponent @show_fomr="modal_shown.state = true" />
  <CommentsComponent @show_form="modal_shown.state = true" />
  <PopUpComponent />
  <OrderFormModal v-if="modal_shown.state" @close="close" />
</template>

<style lang="scss"></style>
