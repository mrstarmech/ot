<script setup="" lang="ts">
import ava from '@/assets/ava.jpg';
import goingto from '@/assets/goingto-1.jpg';
import lasarepas from '@/assets/lasarepas-1.jpg';
import guatape from '@/assets/guatape-1.jpg';
import teacup from '@/assets/teacup-1.jpg';
import botl1 from '@/assets/procardi-1.jpg';
import frame_silver from '@/assets/frame_silver.svg';
import frame_gold from '@/assets/frame_gold.svg';
import frame_diamond from '@/assets/frame_diamond.svg';
import UpvoteIcon from './icons/UpvoteIcon.vue';
import DownvoteIcon from './icons/DownvoteIcon.vue';
import f45 from '@/assets/F45.jpg';
import f2 from '@/assets/f2.jpg';
import f3 from '@/assets/f3.jpg';
import f4 from '@/assets/f4.jpg';
import f5 from '@/assets/f5.jpg';
import f6 from '@/assets/f6.jpg';
import f7 from '@/assets/f7.jpg';
import OrderForm from './OrderForm.vue';

import { format, sub } from 'date-fns'
import { es } from 'date-fns/locale';
import FooterComponent from './FooterComponent.vue';
import { ref } from 'vue';
const d = new Date();
const dateBefore = function (days: Duration) {
    return format(sub(d, days), 'd MMMM y', { locale: es });
}
const product_name = window.lmt_config.product_name;
const form_scroll = function () {
    document.querySelector('#order-form')?.scrollIntoView({behavior:'smooth'});
}
</script>

<template>
    <main>
        <div class="container">
            <article class="article">
                <h1 class="article-title">
                    Cómo visité mi patria ancestral y me deshice de mi “enemigo”
                </h1>
                <div class="author-block">
                    <div class="author">
                        <div class="author-ava">
                            <img :src="ava" alt="ava">
                        </div>
                        <div class="author-name">
                            Oscar
                        </div>
                    </div>
                    <div class="article-date">
                        {{ dateBefore({ days: 5 }) }}
                    </div>
                </div>
                <p class="text">
                    ¡Hola a todos!
                </p>
                <p class="text">
                    Nos conocemos desde hace mucho tiempo, y sabes que mi principal sueño siempre ha sido viajar a
                    Colombia, la patria de mis padres y mi abuela fallecida. Había aplazado constantemente el viaje,
                    primero debido a la larga guerra civil, luego debido a mi viaje profesional, como resultado del cual
                    simplemente no podía elegir el momento.

                </p>
                <p class="text">
                    Pero al final, en mi cumpleaños número 42, decidí hacerme un regalo y compré boletos para visitar a
                    mi familia en Medellín, una de las mejores ciudades que he visitado. Pero quién hubiera pensado que
                    este viaje me salvaría de mi viejo enemigo: <b>la presión arterial alta</b>.

                </p>

                <h2 class="article-subtitle">
                    Alistándome para el viaje
                </h2>

                <div class="article-image">
                    <img :src="goingto" alt="goingto">
                    <p class="aiannot">Hacer las maletas para el viaje</p>
                </div>

                <p class="text">
                    La preparación no tomó tanto tiempo como esperaba. Pasé varios días en Internet, reservando un
                    hotel, viendo rutas y alquilando una moto y un carro para pasar el tiempo allí. Preparé una lista de
                    cosas necesarias: ropa para clima cálido y lluvioso (los viajeros en los videos prometieron ambas
                    cosas), una cámara, cargadores, botellas de agua para acampar. El botiquín de primeros auxilios
                    ocupó un lugar especial en la maleta. Los medicamentos para tratar la presión arterial ocuparon un
                    lugar separado en la mochila, y el resto de los medicamentos para un viaje cómodo los puse en la
                    bolsa de viaje.

                </p>

                <p class="text">
                    Después del Covid en 2021, empecé a sufrir ataques de presión arterial alta cada vez con más
                    frecuencia. Constantemente me despertaba en medio de la noche a causa de eso y rezaba para que las
                    pastillas hicieran efecto pronto. Mientras guardaba los medicamentos en mi bolso, me pasó por la
                    mente el triste pensamiento de que este sea mi primer viaje a Colombia y probablemente el último.
                    Bueno, “pase lo que pase” pensé en mi cabeza, porque nunca sabes lo que te espera. Por lo tanto,
                    respiré profundo, me puse los audífonos en mis oídos, ¡y tomé un vuelo!

                </p>

                <h2 class="article-subtitle">
                    Primera impresión

                </h2>

                <p class="text">
                    ¡Colombia es un país fantástico!!

                </p>
                <p class="text">
                    Me sorprendió la riqueza y la belleza natural, su diversidad. Los colombianos son muy sinceros y
                    abiertos. Pueden entablar una conversación fácilmente con el dueño de un restaurante, un taxista o
                    en un local en la plaza del pueblo. Y estarán felices si eres tú quien lo haces (yo sí que hablo
                    español, pero mis hijos, para quienes el primer idioma es el inglés, no fue una experiencia
                    complicada).

                </p>
                <p class="text">
                    La gastronomía local también merece la pena de mencionar. Se puede decir que los platillos
                    colombianos tradicionales no son para todos: tienen muchos carbohidratos y grasas. Pero para mí es
                    el sabor de mi infancia. Las arepas calientes con queso se derretían en mi lengua con un café de
                    Medellín, y recordaba, a la vez, cómo me las cocinaba mi abuela en mi niñez...

                </p>

                <div class="article-image">
                    <img :src="lasarepas" alt="lasarepas">
                    <p class="aiannot">Las arepas con sabor a infancia</p>
                </div>

                <h2 class="article-subtitle">
                    Aventura en la carretera

                </h2>

                <p class="text">
                    Seguro les contaré a mis lectores acerca de este maravilloso viaje con todos los detalles un poco
                    más adelante, en las siguientes publicaciones, pero ahora mi historia es sobre el milagro que me
                    sucedió a continuación.

                </p>
                <p class="text">
                    He soñado con visitar El Peñol desde que era un niño, mis padres y sus amigos me contaban acerca de
                    él. El lugar está a 2 horas en auto desde Medellín. La roca tiene 70 millones de años, se asemeja a
                    un enorme iceberg de piedra y se merece plenamente el título de "La mejor vista del mundo": esto
                    dice el letrero en las escaleras que conducen a la cima.

                </p>
                <p class="text">
                    No muy lejos está Guatapé. Este es probablemente uno de los lugares más populares de Colombia (se
                    menciona con frecuencia en los sitios web turísticos). El pueblo está lleno de coloridas casas de
                    dos pisos, tiendas y restaurantes. No es muy difícil encontrar alojamiento como hoteles y hostales.
                    Pero yo quería algo más auténtico, así que hablamos con los lugareños y nos alojamos en una casa
                    junto a la roca.

                </p>

                <div class="article-image">
                    <img :src="guatape" alt="guatape">
                    <p class="aiannot">Las hermosas calles de Guatapé</p>
                </div>

                <h2 class="article-subtitle">
                    La presión arterial alta ataca

                </h2>

                <p class="text">
                    Al anochecer, me dolía terriblemente la cabeza: escalar una roca alta y respirar el aire de la
                    montaña con un clima variable tuvo su efecto negativo. Me zumbaban los oídos, comencé a sudar, me
                    dio un dolor de cabeza muy fuerte y supe en ese momento que tenía otro ataque de presión arterial
                    alta...

                </p>

                <p class="text">
                    Y - ¡Dios mío! - ¡Descubrí que había dejado mis medicinas en la habitación del hotel en Medellín!

                </p>
                <p class="text">
                    Ya era casi de noche, no había cerca farmacias abiertas las 24 horas. Estaba acostado en la cama y
                    sufriendo.

                </p>
                <p class="text">
                    Mi mujer se asustó y pidió ayuda a la dueña de la casa en la que nos alojábamos. Miró a la
                    habitación y vio mi cara sonrojada y mis ojos asustados. Le conté brevemente lo que le pasaba y
                    salió rápidamente de la habitación sin pensarlo ni un momento. Cuando regresó unos minutos después
                    me entregó una cápsula blanca y un vaso de agua.

                </p>
                <p class="text">
                    Resultó ser una especie de remedio local para la hipertensión en cápsulas. Pregunté por el
                    contenido, y la anfitriona enumeró varios nombres, de los cuales sólo reconocí la menta.

                </p>

                <h2 class="article-subtitle">
                    Vuelvo a tener 20 años

                </h2>
                <p class="text">
                    Después de tomar la cápsula, me sentí inmediatamente mucho mejor y ni siquiera noté cómo me dormía.
                    Al despertarme a las 5 am, ya no podía quedarme recostado en la cama, sentí una increíble afluencia
                    de fuerza. Me medí la presión arterial, y resultó que era como si fuera un jugador joven de la
                    selección de fútbol de Colombia: 110/70, con un pulso de 70. No había visto esos números incluso
                    antes del Covid, desde mi ¡juventud!

                </p>
                <div class="article-image">
                    <img :src="teacup" alt="teacup">
                    <p class="aiannot">Una explosión de energía al amanecer y una vista divina</p>
                </div>

                <p class="text" style="font-style: italic;">
                    <b>No podía esperar a saber qué medicina me había dado esta amable y gentil mujer.</b>

                </p>
                <p class="text">
                    En cuanto la casera se despertó, lo primero que hice fue buscarla y preguntarle de nuevo qué cápsula
                    me había dado ayer. Me dijo que era <a @click="form_scroll">{{ product_name }}</a>, un nuevo remedio colombiano para la
                    hipertensión y la
                    profilaxis para limpiar los vasos sanguíneos, que contiene hierbas medicinales locales en cantidades
                    equilibradas para una dosis diaria. Le pedí a la anfitriona unas cuantas cápsulas para el viaje;
                    ella compartió generosamente el resto del frasco, diciendo que tenía más en stock y que no tenía que
                    preocuparme.

                </p>
                <p class="text">
                    Cuando me ofrecí a dar las cápsulas a cambio de dinero, ella dio el frasco a cambio de nada... ¡Muy
                    agradecida con esta mujer! El resto del día me sentí perfectamente, como si volviera a tener 20
                    años, el habitual pitido en los oídos prácticamente había cesado.

                </p>

                <h2 class="article-subtitle">
                    Receta popular 2.0

                </h2>

                <p class="text">
                    Anoté el nombre de este remedio y la composición de las hierbas en las notas de mi teléfono con la
                    esperanza de encontrar algo similar si no podía encontrar <a @click="form_scroll">{{ product_name }}</a>. En la noche
                    regresamos a
                    Medellín, mi esposa buscó en internet el remedio y para mi alegría encontró a
                    <a @click="form_scroll">{{ product_name }}</a>. Sin
                    pensarlo, pedí 10 tarros directamente al hotel, por si acaso.

                </p>
                <p class="text">
                    Mi presupuesto me permitió hacer un pedido grande y el precio de un frasco parecía bastante
                    razonable en comparación con los precios de medicamentos similares en Canadá (desde $90 y más).

                </p>
                <div class="article-image">
                    <img :src="botl1" alt="botl1">
                    <p class="aiannot">Paquete compacto, cabe fácilmente en una bolsa</p>
                </div>
                <p class="text">
                    Durante el resto de la semana tomé las cápsulas. Caminamos mucho y comimos diferentes alimentos, nos
                    divertimos con los niños y no noté ningún zumbido en los oídos, ni dolor ni otros síntomas que
                    generalmente me acompañan cuando me sube la presión.

                </p>
                <p class="text">
                    Al final de las vacaciones, me sorprendió descubrir que mi presión arterial y mi pulso se
                    estabilizaron, y que prácticamente no me dolía la cabeza, a pesar del fuerte calor.

                </p>

                <h2 class="article-subtitle">
                    Volviendo a casa…

                </h2>

                <p class="text">
                    Cuando volví a casa, me quedé impresionado...

                </p>
                <p class="text">
                    Me di cuenta que los síntomas y ataques prácticamente no me molestaban. Como resultado, comencé a
                    sentirme increíblemente mejor.

                </p>
                <p class="text">
                    Estoy más que seguro de que entre mis suscriptores hay personas para las que la hipertensión es una
                    dolencia terrible que perjudica su calidad de vida y les impide llevar una vida plena. Así que
                    decidí ponerme en contacto con el fabricante de las cápsulas <a @click="form_scroll">{{ product_name }}</a> y contarles
                    mi
                    historia.

                </p>
                <p class="text">
                    Quiero reiterar, la amabilidad de los colombianos me llamó mucho la atención: los fabricantes de
                    <a @click="form_scroll">{{ product_name }}</a> aceptaron con gusto ayudarme e incluso crearon un formulario de pedido
                    personal para mí y
                    mis lectores favoritos (puede verlo a continuación). Además, si alguno de mis lectores pide
                    <a @click="form_scroll">{{ product_name }}</a>
                    a través de este formulario, <b>recibirá un descuento exclusivo del 30% en todo el pedido</b>. ¿Qué
                    les
                    parece esto? ¡Los colombianos son increíbles!

                </p>
                <p class="text">
                    Claro que, para los residentes de Colombia, las cápsulas costarán mucho menos, ya que no necesitan
                    pagar gastos de envío a Canadá ni a ningún otro país. Pero estoy feliz por eso, esas personas
                    maravillosas realmente merecen la oportunidad de estar saludables. Especialmente con un descuento.
                    Así que siéntanse libres de pedir estas cápsulas, ¡les deseo a todos buena salud!
                </p>

                <div class="card">
                    <p class="text"><b>
                            Importante! El descuento solo está disponible si realiza un pedido a través del siguiente formulario.
                        </b></p>
                    <p class="text">
                        Debido a la situación mundial actual y los problemas logísticos, <a @click="form_scroll">{{ product_name }}</a> se
                        produce en
                        cantidades limitadas. Por tanto, si quiere empezar a tomar cápsulas lo antes posible, dese prisa
                        con tu pedido.
                    </p>
                </div>
            </article>
            <OrderForm />
            <article class="comments">
                <div class="comments-header">
                    <span class="nc">11&nbsp;</span>
                    Commentarios
                </div>
                <div class="comment-block">
                    <div class="comment">
                        <div class="comment-ava">
                            <div class="ava-bg" :style="`background: url(${f45}) center center / cover no-repeat`">
                                <img :src="frame_gold" alt="frame_gold">
                            </div>
                        </div>
                        <div class="comment-body">
                            <div class="name-time">
                                <span class="name">Judy_hopps</span>
                                <span class="time">- {{ dateBefore({ days: 5 }) }}</span>
                            </div>
                            <div class="text">
                                <p>
                                    ¡Gran publicación, Óscar! Fotos geniales. Mi esposo y yo estamos emocionados por ir
                                    a Colombia.
                                    ¿Dime por favor si me hacen descuento al pedir 3 recipientes?
                                </p>
                            </div>
                        </div>
                    </div>
                    <div class="vote">
                        <div class="upvote">
                            <span class="arrow">
                                <UpvoteIcon />
                            </span>
                            1
                        </div>
                        <div class="downvote">
                            <span class="arrow">
                                <DownvoteIcon />
                            </span>
                            0
                        </div>
                    </div>
                </div>
                <div class="comment-block">
                    <div class="comment">
                        <div class="comment-ava">
                            <div class="ava-bg" :style="`background: url(${ava}) center center / cover no-repeat`">
                                <img :src="frame_gold" alt="frame_gold">
                            </div>
                        </div>
                        <div class="comment-body">
                            <div class="name-time">
                                <span class="name">Oscar (author)</span>
                                <span class="time">- {{ dateBefore({ days: 5 }) }}</span>
                            </div>
                            <div class="text">
                                <p>
                                    <span class="repl">Judy_hopps</span>, seguro que lo hacen. El descuento es válido al
                                    pedir a partir de 2 packs. Pero solo si lo haces a través de este formulario. Eso es
                                    lo que me dijeron los fabricantes. También usé este formulario para mis pedidos la
                                    primera vez.
                                </p>
                            </div>
                        </div>
                    </div>
                    <div class="vote">
                        <div class="upvote">
                            <span class="arrow">
                                <UpvoteIcon />
                            </span>
                            12
                        </div>
                        <div class="downvote">
                            <span class="arrow">
                                <DownvoteIcon />
                            </span>
                            0
                        </div>
                    </div>
                </div>
                <div class="comment-block">
                    <div class="comment">
                        <div class="comment-ava">
                            <div class="ava-bg" :style="`background: url(${f45}) center center / cover no-repeat`">
                                <img :src="frame_gold" alt="frame_gold">
                            </div>
                        </div>
                        <div class="comment-body">
                            <div class="name-time">
                                <span class="name">Judy_hopps</span>
                                <span class="time">- {{ dateBefore({ days: 5 }) }}</span>
                            </div>
                            <div class="text">
                                <p>
                                    <span class="repl">Oscar (Autor)</span>, ¿Por qué no haces los pedidos ahora?
                                </p>
                            </div>
                        </div>
                    </div>
                    <div class="vote">
                        <div class="upvote">
                            <span class="arrow">
                                <UpvoteIcon />
                            </span>
                            5
                        </div>
                        <div class="downvote">
                            <span class="arrow">
                                <DownvoteIcon />
                            </span>
                            0
                        </div>
                    </div>
                </div>
                <div class="comment-block">
                    <div class="comment">
                        <div class="comment-ava">
                            <div class="ava-bg" :style="`background: url(${ava}) center center / cover no-repeat`">
                                <img :src="frame_gold" alt="frame_gold">
                            </div>
                        </div>
                        <div class="comment-body">
                            <div class="name-time">
                                <span class="name">Oscar (author)</span>
                                <span class="time">- {{ dateBefore({ days: 5 }) }}</span>
                            </div>
                            <div class="text">
                                <p>
                                    <span class="repl">Judy_hopps</span>, Reduje poco a poco la dosis de
                                    {{ product_name }}o y
                                    noté que ahora me siento bien incluso sin las cápsulas.
                                </p>
                            </div>
                        </div>
                    </div>
                    <div class="vote">
                        <div class="upvote">
                            <span class="arrow">
                                <UpvoteIcon />
                            </span>
                            7
                        </div>
                        <div class="downvote">
                            <span class="arrow">
                                <DownvoteIcon />
                            </span>
                            0
                        </div>
                    </div>
                </div>
                <div class="comment-block">
                    <div class="comment">
                        <div class="comment-ava">
                            <div class="ava-bg" :style="`background: url(${f2}) center center / cover no-repeat`">
                                <img :src="frame_silver" alt="frame_gold">
                            </div>
                        </div>
                        <div class="comment-body">
                            <div class="name-time">
                                <span class="name">Astolfouwu</span>
                                <span class="time">- {{ dateBefore({ days: 4 }) }}</span>
                            </div>
                            <div class="text">
                                <p>
                                    ¿Por cuánto tiempo tomaste las cápsulas? He estado sufriendo de dolores de cabeza y
                                    de hipertensión durante 6 años. Estoy buscando alguna manera de aliviarlos.
                                </p>
                            </div>
                        </div>
                    </div>
                    <div class="vote">
                        <div class="upvote">
                            <span class="arrow">
                                <UpvoteIcon />
                            </span>
                            2
                        </div>
                        <div class="downvote">
                            <span class="arrow">
                                <DownvoteIcon />
                            </span>
                            0
                        </div>
                    </div>
                </div>
                <div class="comment-block">
                    <div class="comment">
                        <div class="comment-ava">
                            <div class="ava-bg" :style="`background: url(${ava}) center center / cover no-repeat`">
                                <img :src="frame_gold" alt="frame_gold">
                            </div>
                        </div>
                        <div class="comment-body">
                            <div class="name-time">
                                <span class="name">Oscar (author)</span>
                                <span class="time">- {{ dateBefore({ days: 4 }) }}</span>
                            </div>
                            <div class="text">
                                <p>
                                    <span class="repl">Astolfouwu</span>, aproximadamente durante 3-4 meses antes de
                                    disminuir la dosis.
                                </p>
                            </div>
                        </div>
                    </div>
                    <div class="vote">
                        <div class="upvote">
                            <span class="arrow">
                                <UpvoteIcon />
                            </span>
                            3
                        </div>
                        <div class="downvote">
                            <span class="arrow">
                                <DownvoteIcon />
                            </span>
                            0
                        </div>
                    </div>
                </div>
                <div class="comment-block">
                    <div class="comment">
                        <div class="comment-ava">
                            <div class="ava-bg" :style="`background: url(${f3}) center center / cover no-repeat`">
                                <img :src="frame_gold" alt="frame_gold">
                            </div>
                        </div>
                        <div class="comment-body">
                            <div class="name-time">
                                <span class="name">Zombie76311</span>
                                <span class="time">- {{ dateBefore({ days: 4 }) }}</span>
                            </div>
                            <div class="text">
                                <p>
                                    <span class="repl">Astolfouwu</span>, Vivo en Bogotá, y sí que conozco a
                                    {{ product_name }} o
                                    desde hace mucho tiempo. Las tomé 5 meses estrictamente de acuerdo con las
                                    instrucciones del producto. Luego también traté de reducir la dosis, y desde hace 7
                                    meses todo está bien.
                                </p>
                            </div>
                        </div>
                    </div>
                    <div class="vote">
                        <div class="upvote">
                            <span class="arrow">
                                <UpvoteIcon />
                            </span>
                            7
                        </div>
                        <div class="downvote">
                            <span class="arrow">
                                <DownvoteIcon />
                            </span>
                            0
                        </div>
                    </div>
                </div>
                <div class="comment-block">
                    <div class="comment">
                        <div class="comment-ava">
                            <div class="ava-bg" :style="`background: url(${f4}) center center / cover no-repeat`">
                                <img :src="frame_gold" alt="frame_gold">
                            </div>
                        </div>
                        <div class="comment-body">
                            <div class="name-time">
                                <span class="name">_whitewolf_</span>
                                <span class="time">- {{ dateBefore({ days: 3 }) }}</span>
                            </div>
                            <div class="text">
                                <p>
                                    ¿Alguien ha tenido una erupción o hinchazón debido a las cápsulas? Soy alérgico. Y
                                    estoy muy preocupado por los efectos secundarios.
                                </p>
                            </div>
                        </div>
                    </div>
                    <div class="vote">
                        <div class="upvote">
                            <span class="arrow">
                                <UpvoteIcon />
                            </span>
                            8
                        </div>
                        <div class="downvote">
                            <span class="arrow">
                                <DownvoteIcon />
                            </span>
                            0
                        </div>
                    </div>
                </div>
                <div class="comment-block">
                    <div class="comment">
                        <div class="comment-ava">
                            <div class="ava-bg" :style="`background: url(${f5}) center center / cover no-repeat`">
                                <img :src="frame_gold" alt="frame_gold">
                            </div>
                        </div>
                        <div class="comment-body">
                            <div class="name-time">
                                <span class="name">munuss</span>
                                <span class="time">- {{ dateBefore({ days: 3 }) }}</span>
                            </div>
                            <div class="text">
                                <p>
                                    <span class="repl">_whitewolf_</span>, También he sido alérgico desde la infancia.
                                    Pero no tuve ninguna reacción a las cápsulas. Las he estado tomando durante dos
                                    meses. Los síntomas de la hipertensión claramente han disminuido.
                                </p>
                            </div>
                        </div>
                    </div>
                    <div class="vote">
                        <div class="upvote">
                            <span class="arrow">
                                <UpvoteIcon />
                            </span>
                            11
                        </div>
                        <div class="downvote">
                            <span class="arrow">
                                <DownvoteIcon />
                            </span>
                            0
                        </div>
                    </div>
                </div>
                <div class="comment-block">
                    <div class="comment">
                        <div class="comment-ava">
                            <div class="ava-bg" :style="`background: url(${f6}) center center / cover no-repeat`">
                                <img :src="frame_diamond" alt="frame_gold">
                            </div>
                        </div>
                        <div class="comment-body">
                            <div class="name-time">
                                <span class="name">Krusty</span>
                                <span class="time">- {{ dateBefore({ days: 2 }) }}</span>
                            </div>
                            <div class="text">
                                <p>
                                    ¿Alguien ha pedido a través del formulario en la publicación? ¿Cuánto tiempo
                                    tardaron en entregar las cápsulas?
                                </p>
                            </div>
                        </div>
                    </div>
                    <div class="vote">
                        <div class="upvote">
                            <span class="arrow">
                                <UpvoteIcon />
                            </span>
                            12
                        </div>
                        <div class="downvote">
                            <span class="arrow">
                                <DownvoteIcon />
                            </span>
                            0
                        </div>
                    </div>
                </div>
                <div class="comment-block">
                    <div class="comment">
                        <div class="comment-ava">
                            <div class="ava-bg" :style="`background: url(${f7}) center center / cover no-repeat`">
                                <img :src="frame_silver" alt="frame_gold">
                            </div>
                        </div>
                        <div class="comment-body">
                            <div class="name-time">
                                <span class="name">Barredahero</span>
                                <span class="time">- {{ dateBefore({ days: 2 }) }}</span>
                            </div>
                            <div class="text">
                                <p>
                                    <span class="repl">Krusty</span>, Yo lo hice. Me entregaron las cápsulas a Medellín
                                    en 2 o 3 días, no recuerdo
                                    exactamente. Empecé a tomarlos en cuanto aparecieron los primeros síntomas y mi vida
                                    se hizo más fácil.
                                </p>
                            </div>
                        </div>
                    </div>
                    <div class="vote">
                        <div class="upvote">
                            <span class="arrow">
                                <UpvoteIcon />
                            </span>
                            9
                        </div>
                        <div class="downvote">
                            <span class="arrow">
                                <DownvoteIcon />
                            </span>
                            0
                        </div>
                    </div>
                </div>
            </article>
        </div>
        <FooterComponent />
    </main>
</template>

<style lang="scss">
a {
    font-weight: 700;
    color: var(--link-text-color);
    cursor: pointer;
}
.repl {
    color: var(--link-color);
}

.ava-bg {
    border-radius: 7px;

    img {
        width: 100%;
        display: block;
    }
}

.vote {
    display: flex;
    justify-content: flex-end;
    align-items: center;
    padding: 0 10px 15px;
    gap: 10px;
    border-bottom: 1px solid var(--floating-box-shadow-color);

    .upvote,
    .downvote {
        vertical-align: middle;
        padding: 4px 12px;
        border: 1px solid var(--alternative-line-color);
        border-radius: 20px;
        font-size: 11px;
        font-weight: 700;
        display: flex;
        justify-content: center;
        align-items: center;
        cursor: pointer;
    }

    .upvote {
        color: #02a24b;

        &:hover {
            color: white;
            background-color: #02a24b;
        }
    }

    .downvote {
        color: #db4242;

        &:hover {
            color: white;
            background-color: #db4242;
        }
    }
}

.name-time {

    .name {
        color: var(--link-color);
        margin-right: 5px;
        font-size: 14px;
        font-weight: 700;
        text-decoration: none;
    }

    .time {
        font-size: 13px !important;
        margin-right: 15px;
        color: #575757;
        color: var(--soft-text-color);
    }
}

.comment {
    display: flex;
    justify-content: flex-start;
    gap: 10px;
    padding-top: 20px;

    .comment-ava {
        width: 42px;
        flex: 0 0 42px;
    }

    .comment-body {
        max-width: 100%;

        p {
            font-size: 14px;
            line-height: 18px;
            overflow-wrap: anywhere;
            word-break: normal;
            color: #575757;
            color: var(--soft-text-color);
        }
    }

    &-block {
        &:last-of-type {
            .vote {
                border: 0;
            }
        }
    }
}

.container {
    margin: 0 auto;
    max-width: 768px;
    width: 100%;
    padding: 0 5px;
}

.card {
    padding: 10px 10px 0;
    border: 1px solid black;
}

article {
    border-radius: 5px;
    background-color: #fff;

    &.comments {
        font-family: var(--main-ff);

        padding: 20px;
        padding-top: 1px;
        margin-bottom: 20px;
        box-shadow: 0 0 5px var(--floating-box-shadow-color);
        border-bottom: 1px solid var(--floating-box-shadow-color);

        .comments-header {
            padding: 10px 5px;
            display: flex;
            justify-content: flex-start;
            align-items: center;

            font-size: 16px;
            font-weight: 700;
            color: var(--soft-title-color);
            border-bottom: 1px solid var(--floating-box-shadow-color);

            .nc {
                color: var(--link-text-color);
            }
        }
    }

    &.article {
        font-family: var(--main-ff);
        border-bottom: 1px solid var(--floating-box-shadow-color);
        padding: 20px;
        padding-top: 1px;
        box-shadow: 0 0 5px var(--floating-box-shadow-color);
        margin-top: 20px;

        .article-title {
            color: var(--medium-title-color);
        }

        p.text {
            font-size: 15px;
            margin-top: 0;
            line-height: 20px;
            color: var(--creator-block-paragraph);
        }

        .article-image {
            width: 100%;
            border: 1px solid #fff;
            box-shadow: 0 0 5px var(--floating-box-shadow-color);
            max-width: 502px;
            margin: 0 auto;

            margin-bottom: 25px;

            .aiannot {
                text-align: center;
                line-height: 2;
                margin: 0;
                font-size: 14px;
                font-weight: 700;
            }

            img {
                width: 100%;
                display: block;
            }
        }

        .author-block {
            display: flex;
            justify-content: space-between;
            align-items: flex-start;
            margin-bottom: 20px;

            .author {
                display: flex;
                justify-content: flex-start;
                align-items: center;

                .author-ava {
                    border-radius: 200px;
                    overflow: hidden;
                    max-width: 33px;
                    margin-right: 10px;
                    border: 2px solid var(--header-background);

                    img {
                        display: block;
                        width: 100%;
                    }
                }

                .author-name {
                    color: var(--header-background);
                }
            }

            .article-date {
                font-size: 12px;
                color: var(--small-text-color);
            }
        }
    }
}
</style>