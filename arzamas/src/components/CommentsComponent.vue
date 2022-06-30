<script setup lang="ts">
import comm1 from "@/assets/1.jpg";
import comm2 from "@/assets/2.jpg";
import comm3 from "@/assets/3.jpg";
import comm4 from "@/assets/4.jpg";
import comm5 from "@/assets/5.jpg";
import comm6 from "@/assets/6.jpg";
import comm7 from "@/assets/7.jpg";
import comm8 from "@/assets/8.jpg";
import comm_u from "@/assets/comm_u.jpg";
import { onMounted, reactive } from "vue";
import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import { faArrowsSpin } from "@fortawesome/free-solid-svg-icons";
library.add(faArrowsSpin);
const emit = defineEmits(['show_form']);
const loader = reactive({ state: true });
const product_name = window.lmt_config.product_name;
onMounted(() => {
  const observer2 = new IntersectionObserver((entries, observer) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        setTimeout(() => {
          loader.state = false;
        }, 1200);
        observer.unobserve(entry.target);
      }
    });
  });
  setTimeout(() => {
    const el = document.querySelector("#loader");
    if (el !== null) observer2.observe(el);
  }, 1000);
});
function go_offer() {
  window.location.href = window.lmt_config.offer_link;
}
</script>

<template>
  <div class="container">
    <h4 class="comment-header">
      <strong> COMENTARIOS: </strong
      ><span v-if="loader.state" id="loader" class="loader">
        <font-awesome-icon icon="fa-solid fa-arrows-spin" />
      </span>
    </h4>
    <div v-if="loader.state" class="clear"><br /><br /></div>
    <div v-if="!loader.state" class="comments">
      <div class="ittem-comment">
        <img class="ava-img" :src="comm_u" :alt="product_name" />
        <p><strong> Carlos </strong></p>
        <p>
          ¡Gracias por este artículo tan interesante! ¡Me gané la lotería con
          "{{ product_name }}" y lo recibí gratis!
        </p>
      </div>
      <div class="ittem-comment">
        <img class="ava-img" :src="comm2" :alt="product_name" />
        <p><strong> Sofía </strong></p>
        <p>
          ¡Qué buen tratamiento! Yo me enfermaba mucho pero desde que uso "{{
            product_name
          }}" para limpiar mis vasos sanguíneos, ya no me preocupo con
          enfermarme. ¡Recomiendo encarecidamente este producto!
        </p>
      </div>
      <div class="ittem-comment">
        <img class="ava-img" :src="comm3" :alt="product_name" />
        <p><strong> Jésica </strong></p>
        <p>
          El producto también fue muy útil para mí. Tuve presión arterial alta
          durante mucho tiempo, fue mi tortura durante más de 7 años. Pensé que
          iba a tomar medicamentos por el resto de la vida pero finalmente,
          después de usar "{{ product_name }}", mejoré. ¡Les recomiendo a todos
          que usen esta fórmula porque es muy efectiva!
        </p>
      </div>
      <div class="ittem-comment">
        <img class="ava-img" :src="comm_u" :alt="product_name" />
        <p><strong> Hugo </strong></p>
        <p>
          Estoy realmente satisfecho con "{{ product_name }}". Lo usé el verano
          pasado y ahora ya no sufro de presión arterial alta. No tengo más
          síntomas de hipertensión. Me sorprendió gratamente el resultado. Me
          siento más en forma y sano.
        </p>
      </div>
      <div class="ittem-comment">
        <img class="ava-img" :src="comm5" :alt="product_name" />
        <p><strong> Isabel </strong></p>
        <p>
          Yo también tengo la costumbre de limpiar mis vasos sanguíneos con
          regularidad. Tengo 81 años y todavía me siento bien, mientras que
          otras personas de mi edad que ya han muerto hace rato.
        </p>
      </div>
      <div class="ittem-comment">
        <img class="ava-img" :src="comm_u" :alt="product_name" />
        <p><strong> Francisco </strong></p>
        <p>
          Gané "{{ product_name }}" a través de un sorteo. Tengo presión
          arterial hereditaria de nivel 3. Tuve que tomar muchos medicamentos.
          Mi presión arterial rara vez era menor de 180/110. Ahora es
          completamente normal otra vez, fue después de usar "{{
            product_name
          }}". Esta fórmula es de verdad una salvación.
        </p>
      </div>
      <div class="ittem-comment">
        <img class="ava-img" :src="comm7" :alt="product_name" />
        <p><strong> Ricardo </strong></p>
        <p>
          Mi vecino se vivía quejando de todo, desde dolor de estómago hasta
          problemas hepáticos. Pero el mes pasado lo vi alegre y com más
          energía. Me dijo que usó "{{ product_name }}" para limpiar sus vasos
          sanguíneos. Si quieres saber su edad, el viejito cumple 72 años este
          año.
        </p>
      </div>
      <div class="ittem-comment">
        <img class="ava-img" :src="comm_u" :alt="product_name" />
        <p><strong> Evelyn </strong></p>
        <p>
          ¡Gracias por la información! Compré {{ product_name }} para mí y mi
          esposo. Le pregunté al operador si todavía había muchos productos con
          descuento disponibles. Dice que quedan menos de 500 paquetes.
          Entonces, si desea obtenerlo, le sugiero que encarguen este suplemento
          lo antes posible.
        </p>
      </div>
      <button @click="emit('show_form')" class="order-btn">CÓMPRELO AHORA</button>
    </div>
  </div>
</template>

<style lang="scss">
.comments {
  font-family: var(--font-mont);
}

.comment-header {
  font-family: var(--font-pt);
}

.order-btn {
  font-size: 120%;
  text-align: center;
  color: #fff !important;
  background-color: red;
  display: table;
  margin: 25px auto;
  width: 400px;
  max-width: 100%;
  border-radius: 15px;
  text-decoration: none;
  padding: 15px;
  font-family: var(--font-mont);
}

.ittem-comment {
  min-height: 70px;
  margin-bottom: 20px;
  border-bottom: 1px solid var(--pale-main-color);

  &:last-of-type {
    border-bottom: 0;
    margin-bottom: 40px;
  }

  img {
    width: 60px;
    border-radius: 10px;
    display: block;
    position: relative;
    float: left;
  }

  p {
    margin: 5px;
    padding: 0 0 0 75px;
  }
}

.loader {
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
</style>
