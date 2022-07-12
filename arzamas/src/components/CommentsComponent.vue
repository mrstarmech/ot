<script setup lang="ts">
import i1 from "@/assets/1.jpg";
import i2 from "@/assets/2.jpg";
import i3 from "@/assets/3.jpg";
import i4 from "@/assets/4.jpg";
import i5 from "@/assets/5.jpg";
import i6 from "@/assets/6.jpg";
import i7 from "@/assets/7.jpg";
import i8 from "@/assets/8.jpg";
import i9 from "@/assets/9.jpg";
import i10 from "@/assets/10.jpg";
import i11 from "@/assets/11.jpg";
import i12 from "@/assets/12.jpg";
import i13 from "@/assets/13.jpg";
import i14 from "@/assets/14.jpg";
import commf1 from "@/assets/commf1.jpg";
import commf2 from "@/assets/commf2.jpg";
import { onMounted, reactive } from "vue";
import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import { faArrowsSpin } from "@fortawesome/free-solid-svg-icons";
library.add(faArrowsSpin);
const emit = defineEmits(["show_form"]);
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
      <div class="article__text myarticle-comment">
        <div class="comment-user">
          <p class="user-name">
            <a @click="emit('show_form')">Clara F.</a>
            <!-- <span class="mycity">México</span> -->
          </p>
          <a @click="emit('show_form')"><img :src="i1" alt="" /></a>
          <p>
            ¡Gracias! El artículo es muy interesante. Ya he hecho mi pedido de
            <a @click="emit('show_form')">{{ product_name }}</a
            >.
          </p>
        </div>
        <div class="comment-user">
          <p class="user-name">
            <a @click="emit('show_form')">Raúl</a>
            <!-- <span class="mycity">Guadalajara</span> -->
          </p>
          <a @click="emit('show_form')"><img :src="i2" alt="" /></a>
          <p>
            Ya he comprado y probado
            <a @click="emit('show_form')">{{ product_name }}</a
            >. Sufro de presión arterial alta desde hace 7 años. Ya no recuerdo
            aquellos momentos de mi vida en que tenía la presión arterial
            normal. Por recomendación del médico, decidí que tenía que limpiar
            mis vasos. Después de un mes de tratamiento con
            <a @click="emit('show_form')">{{ product_name }}</a
            >, mi presión arterial recuperó valores normales. Ya han pasado 2
            meses desde que no tengo la presión arterial alta. Ahora mi vida es
            diferente. Me siento mil veces mejor. Recomiendo este excelente
            producto a todo el mundo, y con este descuento, es casi un regalo.
          </p>
          <div class="clear"></div>
          <figure>
            <img class="cmt" :src="commf1" alt="c1" />
          </figure>
          <p></p>
        </div>
        <div class="comment-user">
          <p class="user-name">
            <a @click="emit('show_form')">Alex</a>
            <!-- <span class="mycity">Chihuahua</span> -->
          </p>
          <a @click="emit('show_form')"><img :src="i3" alt="" /></a>
          <p>
            Yo también me he tratado durante un mes con
            <a @click="emit('show_form')">{{ product_name }}</a
            >. Me siento más saludable y más fuerte. Me siento más joven.
          </p>
        </div>
        <div class="comment-user">
          <p class="user-name">
            <a @click="emit('show_form')">Laura</a>
            <span class="mycity">
              <!-- <a @click="emit('show_form')">México</a></span> -->
            </span>
          </p>
          <a @click="emit('show_form')"><img :src="i4" alt="" /></a>
          <p>
            Gracias. Ya lo he pedido. Me gusta el hecho de que realicen envíos
            por correo a todas partes.
          </p>
        </div>
        <div class="comment-user" style="display: table">
          <p class="user-name">
            <a @click="emit('show_form')">Jaime</a>
            <!-- <span class="mycity"><a @click="emit('show_form')">Puebla</a></span> -->
          </p>
          <a @click="emit('show_form')"><img :src="i5" alt="" /></a>
          <p>
            El paquete me llegó ayer. Así es el producto. Voy a hacer el
            tratamiento de limpieza con mi esposa. Nos hemos hecho unas pruebas
            hace poco y los resultados dicen que tenemos los vasos obstruidos
            con colesterol.
          </p>
          <div class="clear"></div>
          <figure>
            <img class="cmt" :src="commf2" alt="c1" />
          </figure>
          <p></p>
        </div>
        <div class="comment-user">
          <p class="user-name">
            <a @click="emit('show_form')">Amelia</a>
            <!-- <span class="mycity"><a @click="emit('show_form')">Guadalajara</a></span> -->
          </p>
          <a @click="emit('show_form')"><img :src="i6" alt="" /></a>
          <p>
            Hace un mes que comencé el tratamiento con
            <a @click="emit('show_form')">{{ product_name }}</a
            >. A veces, tenía la presión arterial alta y el ritmo cardíaco
            irregular. Ya llevo usándolo 2 semanas. Mi presión arterial ha
            vuelto a la normalidad. Me siento completamente sana.
          </p>
        </div>
        <div class="comment-user">
          <p class="user-name">
            <a @click="emit('show_form')">Cristina</a>
            <!-- <span class="mycity"><a @click="emit('show_form')">Cancún</a></span> -->
          </p>
          <a @click="emit('show_form')"><img :src="i7" alt="" /></a>
          <p>
            Tengo 61 años. Llevo haciéndome tratamientos para limpiar los vasos
            desde hace 5 años. Me ayudan a conservar mi salud y me dan fuerzas.
            No tengo ninguna enfermedad, aunque muchos de mis amigos ya han
            fallecido. Todavía tengo relacionados sexuales. ¡Es absolutamente
            necesario limpiar los vasos sanguíneos!
          </p>
        </div>
        <div class="comment-user" style="display: table">
          <p class="user-name">
            <a @click="emit('show_form')">María del Carmen</a>
            <!-- <span class="mycity">Ciudad Juárez</span> -->
          </p>
          <a @click="emit('show_form')"><img :src="i8" alt="" /></a>
          <p>
            He tratado mi presión arterial alta con este medicamento. Llevaba
            muchos años sufriendo por ello. Con el tiempo, también desarrollé
            diabetes y problemas renales. Trastornos de la memoria y la vista.
            Me hice un montón de tratamientos que no sirvieron para nada. Decidí
            probar <a @click="emit('show_form')">{{ product_name }}</a
            >. Fue la primera vez que pedía medicamentos por Internet. Resultó
            ser muy sencillo.
          </p>
        </div>
        <div class="comment-user">
          <p class="user-name">
            <a @click="emit('show_form')">Raquel</a>
            <!-- <span class="mycity"><a @click="emit('show_form')">Oaxaca</a></span> -->
          </p>
          <a @click="emit('show_form')"><img :src="i9" alt="" /></a>
          <p>
            ¡Gracias! He visto un programa de televisión en el que hablaban de
            este producto. Todos los médicos lo recomendaban. Afirmaban que
            limpiar los vasos sanguíneos es totalmente necesario para todo el
            mundo.
          </p>
        </div>
        <div class="comment-user">
          <p class="user-name">
            <a @click="emit('show_form')">Alfredo</a>
            <!-- <span class="mycity">Puebla</span> -->
          </p>
          <a @click="emit('show_form')"><img :src="i10" alt="" /></a>
          <p>
            ¡Este producto es altamente efectivo! ¡Doy fe! He tenido una presión
            arterial de 140/90 durante años. Después del tratamiento, mi presión
            volvió a 125/80. ¡Me siento muy bien!
          </p>
        </div>
        <div class="comment-user">
          <p class="user-name">
            <a @click="emit('show_form')">Macarena</a>
            <!-- <span class="mycity">Mérida</span> -->
          </p>
          <a @click="emit('show_form')"><img :src="i11" alt="" /></a>
          <p>
            He leído toda la información sobre
            <a @click="emit('show_form')">{{ product_name }}</a> en
            <a @click="emit('show_form')"> su sitio web</a>. ¡Me ha parecido
            sorprendente e impresionante!
          </p>
        </div>
        <div class="comment-user">
          <p class="user-name">
            <a @click="emit('show_form')">Juan S.</a>
            <!-- <span class="mycity">México</span> -->
          </p>
          <a @click="emit('show_form')"><img :src="i12" alt="" /></a>
          <p>¡He conseguido la oferta! ¡Gracias!</p>
        </div>
        <div class="comment-user" style="display: table">
          <p class="user-name">
            <a @click="emit('show_form')">Víctor</a>
            <!-- <span class="mycity">Tijuana</span> -->
          </p>
          <a @click="emit('show_form')"><img :src="i13" alt="" /></a>
          <p>
            Yo también seguí el tratamiento durante un mes (de forma
            interrumpida). Me siento mejor. Estoy repleto de fuerza y energía y
            he conseguido fortalecer mi sistema inmunológico. Me siento 10 años
            más joven. Tengo 72 años.
          </p>
        </div>
        <div class="comment-user">
          <p class="user-name">
            <a @click="emit('show_form')">Lorena</a>
            <!-- <span class="mycity">México</span> -->
          </p>
          <a @click="emit('show_form')"><img :src="i14" alt="" /></a>
          <p>
            Hace dos meses, yo también completé el tratamiento de limpieza con
            <a @click="emit('show_form')">{{ product_name }}</a
            >. Cuando tenía los vasos obstruidos, siempre me sentía muy cansada,
            pero ahora tengo mucha energía. Consigo hacer más cosas durante el
            día. Antes tenía fuertes dolores de cabeza, ahora han desaparecido.
            También duermo mejor Por si acaso, he pedido unos cuantos paquetes
            más. ¡Gracias!
          </p>
        </div>
        <br />
      </div>
      <button @click="emit('show_form')" class="order-btn">
        CÓMPRELO AHORA
      </button>
    </div>
  </div>
</template>

<style lang="scss">
.clear {
  padding: 5px;
}

.comments {
  font-family: var(--font-mont);
}

.comment-header {
  font-family: var(--font-pt);
}

.order-btn {
  background: red;
  border-radius: 200px;
  border: 0;
  color: #fff;
  font-family: var(--font-pt);
  font-weight: 700;
  font-size: 24px;
  width: 300px;
  margin-top: 20px;
  margin-bottom: 30px;
  max-width: 100%;
  padding: 15px 10px;
  display: block;
  cursor: pointer;
  box-shadow: 0 5px 6px #958b6b;
  margin: 20px auto;

  @media screen and (max-width: 655px) {
    margin: 5px auto 55px;
  }
}

.comment-user {
  min-height: 130px;
  clear: both;
  border-bottom: 1px solid rgb(204, 204, 204);
  margin-bottom: 20px;

  p {
    margin-top: 0;
  }
}

.comment-user {
  .user-name {
    font-weight: bold;
    padding: 0px 0px 10px;
    text-indent: 0;
    margin-bottom: 0;

    a {
      color: #000;
      text-decoration: none;
    }
  }

  img {
    width: 60px;
    float: left;
    margin: 0px 20px 0px 0px;
  }

  figure {
    padding: 3px;
    width: fit-content;
    border: 1px solid rgba(0, 0, 0, 0.15);
    box-shadow: 0 0 5px rgba(0, 0, 0, 0.15);
    padding: 10px;
    text-align: center;
    max-width: 300px;
    margin-left: 0;
    margin-top: 20px;
    display: block;

    img {
      display: block;
      float: none;
      width: 100%;
    }
  }

  a {
    text-decoration: underline;
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
