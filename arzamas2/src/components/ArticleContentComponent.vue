<script setup lang="ts">
import ArticleImageComponent from "./ArticleImageComponent.vue";
import scientist1 from "@/assets/scientist_1.jpg";
import babulya from "@/assets/babulya.jpg";
import clinicdesk1 from "@/assets/clinicdesk_1.jpg";
import veins from "@/assets/veins.jpg";
import product from "@/assets/product.png";
import podruga from "@/assets/podruga.jpg";
import girl from "@/assets/girl.jpg";
import man from "@/assets/man.jpg";
const product_name = window.lmt_config.product_name;

const scroll = () => {
  document
    .querySelector("#scroll-anchor-form")
    ?.scrollIntoView({ behavior: "smooth" });
};
</script>

<template>
  <section class="intro">
    <ArticleImageComponent :src="scientist1" alt="babulya" />
    <p class="text">
      <b>Se llama Julianna Totti y tiene 38 años. Trabaja como cardióloga
        adjunta en un gran centro sanitario público de Barcelona. Su trabajo le
        exige no sólo colaborar con el cardiólogo jefe, sino también participar
        activamente en la investigación como parte del propio equipo del centro.
        Y ha conseguido hacer un descubrimiento increíble en su campo: Julianne
        ha encontrado una fórmula que funciona para eliminar el colesterol de
        los vasos sanguíneos y, como resultado, deshacerse de los síntomas de la
        hipertensión. Su calvario no estuvo exento de intriga, ya que el sujeto
        era un amigo de 86 años de su abuela de 129 años</b>
    </p>
    <p class="text">
      Sin embargo, nuestra corresponsal descubrió qué la impulsó a hacer esta
      investigación y cómo la experiencia de su propia abuela ayudó a Julianne a
      hacer este descubrimiento.
    </p>
  </section>
  <section class="interview">
    <p class="q">
      <span class="author">José Perdiguez (J.P.):</span> ¡Julianne, hola! ¿Cuál
      fue tu motivación cuando te invitaron a formar parte del grupo de estudio?
      ¿Cuáles eran sus objetivos?
    </p>
    <p class="a">
      <span class="babulya">Julianna Totti (J.T.):</span> ¡Hola José! En
      realidad, siempre intento aprender cosas nuevas en mi profesión, así que
      cuando me enteré de la oportunidad de formar parte de un grupo en nuestro
      centro, me presenté sin pensarlo demasiado. Para mí, no es sólo una
      experiencia profesional, sino también una historia personal que me ayudó a
      hacer un descubrimiento.
    </p>
    <p class="a">
      <span class="author">J.P.:</span>
      ¿Así que te motivó hacer esto por algo personal?
    </p>
    <p class="a">
      <span class="author">J.T.:</span>
      Sí. Después de todo, vengo de Colombia, que es uno de los climas más
      diversos de Sudamérica, y la gente de allí suele tener problemas
      cardíacos. La presión arterial alta y la hipertensión son muy comunes
      allí, especialmente después de la cuarta ola del coronavirus, los
      problemas de los vasos sanguíneos son cada vez más comunes, no sólo en los
      ancianos sino también en los jóvenes.
    </p>
    <ArticleImageComponent :src="clinicdesk1" :alt="'veins'" />
    <p class="a">
      Incluso aquí, en España, suelen llegar jóvenes de entre 30 y 40 años, en
      los que se notan los efectos del covid-19 y su exuberante juventud. Las
      personas acuden con dolores de cabeza, debilidad y fatiga severa, falta de
      aire, fluctuación de la presión arterial. Esto es un problema y me
      interesé en tratarlo y encontrar una solución cómoda para las personas con
      estos problemas.
    </p>
    <p class="q">
      <span class="author">J.P.:</span> Permítame que le haga una observación,
      pero usted sólo tiene 38 años, ¿no es así, y cree que tiene suficiente
      experiencia en este campo?
    </p>
    <p class="a">
      <span class="babulya">J.T.:</span> Sí, porque mi abuela vivió hasta los
      129 años gracias a la limpieza vascular regular. La recuerdo de mis días
      de infancia, era y sigue siendo vivaz, enérgica y libre de los síntomas
      que mencioné anteriormente. Se podría decir que fue mi abuela la que me
      ayudó a hacer este descubrimiento, me mostró el camino, y se lo agradezco.
    </p>
    <ArticleImageComponent :src="babulya" alt="babulya" />
    <p class="a">
      <span class="author">Sra. Juliana K. (J.K.):</span> A menudo he dicho a
      los periodistas (los periodistas la visitan a menudo) que todo es gracias
      a la limpieza vascular que hago regularmente. Esta receta me la pasó mi
      abuela. Era una sanadora. Incluso personas de otras ciudades acudían a
      ella para recibir tratamiento.
    </p>
    <ArticleImageComponent :src="veins" alt="veins"
      :annot="`&quot;Nuestra sangre fluye por los vasos sanguíneos y nutre todos nuestros órganos. Cuanto mejor comamos, más sano será el cuerpo. La salud de una persona está directamente relacionada con la salud de los vasos sanguíneos&quot;. (Miss Julianne)`" />
    <p class="q">
      <span class="author">J.P.:</span> ¿Así que tu abuela consigue mantenerse
      despierta y fuerte con la ayuda de las hierbas locales? ¿Podría compartir
      una lista con los nombres de estas hierbas?
    </p>
    <p class="a">
      <span class="babulya">J.T.:</span> (Sonriendo) La lista no es tan
      importante, en realidad. Lo importante es que entre estas hierbas mi grupo
      y yo logramos encontrar una determinada combinación que hacía que la
      disolución del colesterol en los vasos sanguíneos fuera 3 veces más eficaz
      que el tratamiento con las mismas hierbas.
    </p>
    <p class="a">
      <span class="author">J.P.:</span>
      ¡Intrigante! Cuéntenos cómo realizó la investigación: ¿quiénes
      participaron en los experimentos?
    </p>
    <p class="a">
      <span class="author">J.T.:</span>
      Mis colegas y yo tomamos las mismas hierbas de las que me había hablado mi
      abuela, y también tomamos algunos otros remedios que supuestamente podían
      diluir la sangre y realizar una función de limpieza. Empezamos a buscar
      primero los elementos activos y luego a reunir varias combinaciones.
      Resultó que algunos de ellos eran simplemente ineficaces, pero había una
      serie de combinaciones y fórmulas que podían resolver el problema
      vascular. A continuación, probamos a fondo el fármaco que habíamos creado
      y creamos un lote para ensayos en humanos. Elegimos a varios candidatos de
      diferentes edades, géneros y nacionalidades, y uno de ellos resultó ser un
      "joven" amigo de mi abuela, que había cumplido recientemente 82 años.
    </p>
    <ArticleImageComponent :src="podruga" :alt="`podruga`"
      annot="Marianne F., de 86 años, lleva 4 semanas tomando el medicamento de prueba" />
    <ArticleImageComponent :src="man" :alt="`podruga`"
      annot="Jacob X., de 39 años, lleva 2 semanas tomando el medicamento de prueba" />
    <ArticleImageComponent :src="girl" :alt="`podruga`"
      annot="Evgeniya K., de 28 años, lleva 3 semanas tomando el medicamento de prueba" />
    <p class="a">
      Nuestros candidatos tomaron el remedio durante una, dos y cuatro semanas
      bajo nuestra supervisión. Y nos quedamos de piedra cuando recibimos la
      respuesta de los sujetos.
    </p>
    <p class="a">
      <b>
        La presión arterial y el pulso empezaron a normalizarse y estabilizarse,
        el tinnitus se detuvo, las migrañas desaparecieron al cabo de dos
        semanas y el sujeto de prueba masculino ni siquiera tuvo problemas de
        potencia, dijo. Las niñas tenían menos dolores del síndrome
        premenstrual, su sueño se normalizó y Donna Rosita, la amiga de mi
        abuela, dejó de sufrir dolores de cabeza y se volvió incluso más
        despierta que mi abuela.
      </b>
    </p>
    <p class="a">
      <span class="author">J.P.:</span>
      Esto es muy interesante. Lo más interesante es que cada persona se ve
      afectada de forma diferente por el medicamento, pero ¿qué pasa si ese
      medicamento tiene efectos secundarios? ¿Cuánto duran las pruebas?
    </p>
    <p class="a">
      <span class="author">J.T.:</span>
      Trabajamos en este proyecto durante unos dos años, probamos durante otros
      seis meses, probamos lentamente porque sabíamos que se estaban gastando
      grandes presupuestos para combatir los efectos de la pandemia, y sabíamos
      por los resultados provisionales que tendríamos éxito, así que nos tomamos
      nuestro tiempo. En cuanto a los efectos secundarios, el fármaco es
      completamente inofensivo y no causa ningún efecto secundario ni en monos
      ni en ratones, y nuestros sujetos de prueba no notaron ningún deterioro en
      su salud.
    </p>
    <p class="a">
      <span class="author">J.P.:</span>
      Entonces, Juliana, dinos, ¿qué es esa medicina de la que hablas, ya tiene
      nombre?
    </p>
    <p class="a">
      <span class="author">J.T.:</span>
      Sí, ya hemos obtenido una patente sobre la fórmula y luego nuestros socios
      fabricantes han producido un lote de cápsulas que se venden en Colombia
      con el nombre de “<b style="color:red" @click="scroll">{{ product_name }}</b>”. Ahora se están produciendo
      activamente e incluso se pueden encargar.
    </p>
    <ArticleImageComponent :style="`padding:25px; max-width: 400px`" :src="product" />
    <p class="a">
      <span class="author">J.P.:</span>
      ¿Puede decirme más sobre lo que contienen las cápsulas de “<b @click="scroll" style="color:red">{{ product_name
      }}</b>”?
    </p>
    <p class="a">
      <span class="author">J.T.:</span>
      El producto contiene una sustancia especial llamada a-tocoferol, que tiene
      la capacidad de penetrar en las moléculas de colesterol y descomponerlas
      desde el interior. De este modo, el colesterol puede eliminarse
      eficazmente de los vasos sanguíneos. Además del a-tocoferol, este producto
      contiene también unas 50 vitaminas y micro y macronutrientes buenos para
      el corazón. La base de la composición consiste en:
    </p>
  </section>
  <section class="components">
    <table class="c15">
      <tbody>
        <tr class="c3">
          <td class="c2" colspan="1" rowspan="1">
            <p class="c0"><span class="c1">Polvo de oliva</span></p>
          </td>
          <td class="c2" colspan="1" rowspan="1">
            <p class="c0">
              <span class="c1">
                Ayuda a aumentar la secreción de la hormona del metabolismo del
                azúcar, inhibe la capacidad de absorción del tracto intestinal y
                el hígado, y aumenta la capacidad de utilizar la glucosa en los
                tejidos, lo que reduce los niveles de azúcar en sangre y
                controla los niveles de azúcar en sangre a un nivel seguro y
                estable.
              </span>
            </p>
          </td>
        </tr>
        <tr class="c3">
          <td class="c2" colspan="1" rowspan="1">
            <p class="c0"><span class="c1">Limón en polvo</span></p>
          </td>
          <td class="c2" colspan="1" rowspan="1">
            <p class="c0">
              <span class="c1">
                Aumenta la elasticidad de las paredes vasculares, reduce su
                resistencia al flujo sanguíneo, alivia el espasmo vascular,
                fortalece los tejidos de las arterias. Alivia el dolor causado
                por el espasmo arterial, previene el desarrollo de
                complicaciones de la hipertensión.
              </span>
            </p>
          </td>
        </tr>
        <tr class="c3">
          <td class="c2" colspan="1" rowspan="1">
            <p class="c0"><span class="c1">Polvo de espino</span></p>
          </td>
          <td class="c2" colspan="1" rowspan="1">
            <p class="c0">
              <span class="c1">
                Contiene aproximadamente 29 tipos de ácidos orgánicos, aceites
                esenciales y varios aminoácidos, caroteno, vitamina C, hierro,
                Mg, Ca, K y Na con el efecto de reducir la presión arterial,
                ayudar a promover la circulación sanguínea y regular la presión
                arterial, reduciendo insomnio, dolor de espalda y dolor.
              </span>
            </p>
          </td>
        </tr>
        <tr class="c3">
          <td class="c2" colspan="1" rowspan="1">
            <p class="c0"><span class="c1">Vitamina B6</span></p>
          </td>
          <td class="c2" colspan="1" rowspan="1">
            <p class="c0">
              <span class="c1">
                Fortalece el músculo cardiaco y las paredes vasculares, mejora
                el tono, la elasticidad vascular, su capacidad para contrarse y
                dilatarse de manera oportuna, aumenta las funciones protectoras
                del corazón y los vasos sanguíneos, su resistencia a la
                influencia negativa de factores patógenos, alivia los espasmos
                de los músculos lisos del corazón y los vasos sanguíneos.
              </span>
            </p>
          </td>
        </tr>
        <tr class="c3">
          <td class="c2" colspan="1" rowspan="1">
            <p class="c0"><span class="c1">Omega 3 en polvo</span></p>
          </td>
          <td class="c2" colspan="1" rowspan="1">
            <p class="c0">
              <span class="c1">
                Reduce la presión y mejora la excreción del exceso de sales del
                cuerpo, limpia la sangre, normaliza la frecuencia cardíaca,
                fortalece las paredes de los vasos sanguíneos y los tonifica,
                estimula la producción de glóbulos rojos, lleva el nivel de
                azúcar en la sangre a su normalidad.
              </span>
            </p>
          </td>
        </tr>
      </tbody>
    </table>
  </section>
  <section class="interview2">
    <p class="q">
      <span class="author">J.P.:</span> ¿Cómo podemos encontrar a
      <b style="color:red" @click="scroll">{{ product_name }}</b> en Colombia? También tengo
      familiares en Medellín que tienen problemas vasculares.
    </p>
    <p class="a">
      <span class="babulya">J.T.:</span> Ya se han organizado las entregas a Colombia, ya que el programa del Instituto
      de Salud se está aplicando allí. Recomiendo a todo el mundo que limpie sus vasos sanguíneos sólo con este
      producto, pero date prisa para no perder el envío con descuento del gobierno. Puede hacer su pedido a través del
      sitio web oficial de <b style="color:red" @click="scroll">{{ product_name }}</b>
    </p>
    <p class="a">
      <span class="author">J.P.:</span>
      ¡Gracias, Julianne!
    </p>
    <p class="a">
      <span class="author">J.T.:</span>
      ¡Y gracias por la oportunidad de difundir la palabra sobre
      <b style="color:red" @click="scroll">{{ product_name }}</b>! ¡Buena salud para ti y tus seres queridos!
    </p>
  </section>
</template>

<style lang="scss">
section {
  line-height: 29px;
}

.intro {
  font-family: var(--font-mont);
  font-size: var(--main-text-size);
  animation: article-in 1.5s ease-in-out;
}

.components {
  font-family: var(--font-mont);
  font-size: var(--small-text-size);

  @media (min-width: 426px) {
    font-size: var(--main-text-size);
  }

  table {
    border-collapse: collapse;
    border-spacing: 0;
  }

  .c15 {
    border: 1px solid #d6d6d6;

    tr,
    td {
      border: 1px solid #d6d6d6;
    }

    p {
      padding: 0 10px;
    }
  }
}

p {
  &.text {
    font-family: var(--font-mont);
    font-size: var(--main-text-size);
  }

  &.q,
  &.a {
    font-family: var(--font-mont);
    font-size: var(--main-text-size);
  }

  .author,
  .babulya {
    font-weight: 700;
  }

  a {
    color: var(--link-color);
  }
}

ul {
  &.text {
    font-family: var(--font-mont);
    font-size: var(--main-text-size);
  }
}
</style>
