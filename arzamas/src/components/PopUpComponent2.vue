<script setup lang="ts">
import { reactive } from "vue";
import product from '@/assets/product.png';
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faXmark } from "@fortawesome/free-solid-svg-icons";
import type { FormParamsKey } from "../types";
const getParamFromConfig = function (name: string): string {
    return window.lmt_config.form_params[name as FormParamsKey];

};
library.add(faXmark);
const shown = reactive({ state: false });
function close() {
  shown.state = false;
}

function go() {
  close();
  window.location.href = getParamFromConfig('offer_link');
}

setTimeout(() => {
  shown.state = true;
}, 30000);
</script>
<template>
  <div class="popup" :class="{ inactive: !shown.state, active: shown.state }">
    <div class="action">
      <p @click="go" class="link">
        <img width="16" :src="product" alt="">
        <span class="link-link"> Reserve ahora por el precio promocional</span> <span class="blk"><span
            class="old-price-pop">258000 COP</span> <span class="new-price-pop">129000 COP</span> <button
            class="pop-btn" @click="go">PEDIR</button></span>
      </p>
    </div>
    <div @click="close" class="cross">
      <FontAwesomeIcon icon="fa-solid fa-xmark" />
    </div>

  </div>
</template>

<style lang="scss">
.blk {
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 10px;
}
.cross {
  padding: 10px 7px 10px 10px;
}
.popup {
  position: fixed;
  bottom: 0;
  width: 100%;
  background: #fff;
  display: flex;
  padding: 10px;
  align-items: center;
  justify-content: space-between;
  box-shadow: 0 0 5px gray;

  .action {
    width: 100%;
  }

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
    font-family: var(--font-mont);
    font-size: 16px;
    width: 100%;
    display: flex;
    justify-content: center;
    gap: 30px;
    align-items: center;
    flex-wrap: wrap;
    padding: 5px;

    @media screen and (max-width:768px) {
      justify-content: center;
      gap: 10px;
    }
  }

  .link-link {
    font-weight: 700;
    text-decoration: underline;
    display: block;
  }

  .old-price-pop {
    color: #999;
    font-size: 24px;
    text-decoration: line-through;
    font-weight: 700;

    @media screen and (max-width:970px) {
      font-size: 20px;
    }
    @media screen and (max-width:450px) {
      font-size: 15px;
    }
    @media screen and (max-width:450px) {
      font-size: 14px;
    }
  }

  .new-price-pop {
    color: #000;
    font-size: 26px;
    color: #f00;
    font-weight: 700;

    @media screen and (max-width:450px) {
      font-size: 16px;
    }
  }

  button {
    display: block;
    margin: 0 25px;
    padding: 16px 64px;
    border-radius: 200px;
    border: none;
    font-size: 24px;
    font-weight: 700;
    color: #fff;
    background-color: #f00;
    cursor: pointer;

    @media screen and (max-width:768px) {
      font-size: 20px;
      padding: 16px 24px;
      margin: 0 15px;
    }
    @media screen and (max-width:450px) {
      font-size: 14px;
      padding: 10px 18px;
    }
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
