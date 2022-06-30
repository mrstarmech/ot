<script setup lang="ts">
import { reactive } from "vue";
import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import { faXmark } from "@fortawesome/free-solid-svg-icons";
library.add(faXmark);

const shown = reactive({ state: false });
function close() {
  shown.state = false;
}

function go() {
  close();
  document.querySelector("#scroll-anchor-form")?.scrollIntoView({
    behavior: "smooth",
  });
}

setTimeout(() => {
  shown.state = true;
}, 15000);
</script>
<template>
  <div class="popup" :class="{ inactive: !shown.state, active: shown.state }">
    <div class="action">
      <p class="call">
        ¡Tu receta está aprobada!
      </p>
      <p @click="go" class="link">
        <span class="link-link">¡Haga clic aquí para recoger con descuento!</span>
      </p>
    </div>
    <div class="close" @click="close">
      <font-awesome-icon icon="fa-solid fa-xmark" />
    </div>
  </div>
</template>

<style lang="scss">
.popup {
  position: fixed;
  bottom: 0;
  width: 100%;
  background: #ffde42;
  display: flex;
  padding: 5px;
  align-items: center;
  justify-content: space-between;
  .close {
    width: 65px;
    height: 60px;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 24px;
  }

  .call,
  .link {
    margin: 0;
    font-family: var(--font-pt);
    font-size: 16px;
  }
  .link-link {
    font-weight: 700;
    text-decoration: underline;
  }
  &.active {
    animation: show-up 1s ease-in-out;
  }
  &.inactive {
    display: none;
  }
}
@keyframes show-up {
  0% {
    transform: translateY(100%);
  }
  100% {
    transform: translateY(0);
  }
}
</style>
