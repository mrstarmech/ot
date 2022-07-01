<script setup lang="ts">
import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import { faArrowsSpin } from "@fortawesome/free-solid-svg-icons";
import { onMounted, reactive } from "vue";
library.add(faArrowsSpin);
const product_image = window.lmt_config.product_image;
// const product_name = window.lmt_config.product_name;
const timer = {
  isLoading: true,
  initialTime: 1500,
  time: function (pass: number) {
    this.initialTime -= pass;
    const curr = this.initialTime - pass;
    if (curr <= 0) return "0 días 0 horas 0 minutos";
    // const d = (curr / 86400).toFixed();
    // const h = Math.floor((curr % 86400) / 3600);
    const m = Math.floor(((curr % 86400) % 3600) / 60);
    const s = Math.floor(((curr % 86400) % 3600) % 60);
    return `${m < 10 ? "0" : ""}${m}:${s < 10 ? "0" : ""}${s}`;
  },
};
const timer_react = reactive(timer);
const tt = {
  left: "",
};
const timer_time = reactive(tt);
onMounted(() => {
  const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        setTimeout(() => {
          timer.isLoading = false;
        }, 100);
        observer.unobserve(entry.target);
      }
    });
  });
  setTimeout(() => {
    const el = document.querySelector("#timer");
    if (el !== null) observer.observe(el);
  }, 1000);
  setInterval(() => {
    if (!timer.isLoading) {
      timer_time.left = timer.time(1);
    }
  }, 1000);
});

const emit = defineEmits(["show_form"]);
const btn_click = function () {
  emit("show_form");
};
</script>
<template>
  <div id="scroll-anchor-form"></div>
  <div class="order-form">
    <div class="product-image">
      <img :src="product_image" alt="product" />
      <div class="disc">
        <p class="head">¡Descuento!</p>
        <p class="price-old">258000 COP</p>
        <p class="price-new">129000 COP</p>
      </div>
    </div>
    <p class="accent">
      Cómprelo a un precio promocional antes de que esta oferta pase al próximo
      lector!
    </p>
    <button @click="btn_click" class="order-form-btn">
      Compre con un 50% de descuento
    </button>
    <p ref="timer_block" id="timer" class="timer">
      <span class="timer-text">
        ¡Tenga en cuenta! La oferta especial es válida mientras dure:
      </span>
      &nbsp;&nbsp;&nbsp;&nbsp;
      <span class="timer-loading" :class="{ hidden: !timer_react.isLoading }">
        <font-awesome-icon icon="fa-solid fa-arrows-spin" />
      </span>
      <span class="timer-time" :class="{ hidden: timer_react.isLoading }">{{
        timer_time.left
      }}</span>
    </p>
  </div>
</template>

<style lang="scss">
.hidden {
  display: none !important;
}

@keyframes spinner {
  0% {
    transform: rotateZ(0deg);
  }

  100% {
    transform: rotateZ(360deg);
  }
}

.timer {
  text-align: center;
  font-family: var(--font-mont);
  line-height: 1.5;

  .timer-loading {
    animation: spinner 2s linear infinite;
    display: inline-block;
    width: fit-content;
    line-height: 1;
    font-size: 1em;
    height: auto;

    svg {
      vertical-align: -0.125em;
    }
  }

  .timer-time {
    display: block;
    color: #ff8484;
    font-weight: 700;
    font-size: 1.5em;
  }
}

#scroll-anchor-form {
  height: 20px;
  width: 100%;
}

.order-form {
  max-width: 600px;
  width: 100%;
  margin: 25px auto 25px;
  padding: 25px 15px 1px;
  box-shadow: 0 0 6px var(--pale-main-color);
}

.accent {
  font-family: var(--font-mont);
  font-size: var(--main-text-size);
  text-align: center;
  font-weight: 500;

  @media screen and (min-width: 426px) {
    font-size: calc(var(--main-text-size) + 0.25em);
  }
}

.product-image {
  max-width: 150px;
  width: 100%;
  margin: 0 auto;
  position: relative;

  img {
    display: block;
    width: 100%;
  }

  .disc {
    font-family: var(--font-mont);
    position: absolute;
    right: -50px;
    top: 0;
    color: #000;
    box-shadow: rgba(0, 0, 0, 0.8) 0 3px 30px;
    width: 150px;
    height: 98px;
    text-align: center !important;
    font-size: 18px;
    font-weight: bold;
    line-height: 1.3;
    transform: rotateZ(-7deg);
    margin: -0px auto 0;
    background: rgb(253, 237, 19);
    border-width: 2px;
    border-style: solid;
    border-color: rgb(255, 255, 255);
    border-image: initial;
    border-radius: 19%;

    p {
      margin: 0;
    }

    .head {
      margin: 9px 0 0;
      font-size: 1.15em;
    }

    .price-old {
      text-decoration: line-through;
    }

    .price-new {
      text-decoration: underline;
      font-size: 20px;
      line-height: 15px;
      margin: 0 auto;
      color: red;
    }
  }
}

.order-form-btn {
  background: red;
  border-radius: 200px;
  border: 0;
  color: #fff;
  font-family: "Roboto";
  font-weight: 700;
  font-size: 24px;
  width: 300px;
  margin-top: 20px;
  margin-bottom: 20px;
  max-width: 100%;
  padding: 15px 25px;
  display: block;
  cursor: pointer;
  box-shadow: 0 5px 6px #958b6b;
  margin: 20px auto;

  @media screen and (max-width: 655px) {
    margin-top: 5px;
    margin-bottom: 15px;
  }
}
</style>
