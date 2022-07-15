<script lang="ts" setup>
import product from "@/assets/product.png";
import { format } from 'date-fns';
import { onMounted, reactive, ref, watch } from "vue";
import type { FormParamsKey } from "../types";
const getParamFromConfig = function (name: string): string {
    return window.lmt_config.form_params[name as FormParamsKey];

};
const today = format(new Date(), "d.MM.y");
const order_form = ref<HTMLFormElement>();
const name = reactive({ val: '' });
const name_input = ref<HTMLInputElement>();
const phone = reactive({ val: '+57' });
const phone_input = ref<HTMLInputElement>();
const name_pattern = getParamFromConfig('name_pattern');
const phone_pattern = getParamFromConfig('phone_pattern');
const name_error = reactive({ value: true });
const name_error_message = reactive({ value: '' });
const phone_error = reactive({ value: true });
const phone_error_message = reactive({ value: '' });
const handle_name_input = function () {
    if (name_input.value && name.val.length < name_input.value.minLength) {
        name_error.value = true;
        name_error_message.value = `Por favor, introduzca al menos ${name_input.value.minLength} caracteres`;
        return;
    }
    const match = name.val.match(name_pattern);
    if (!(match && match[0] === name.val)) {
        name_error.value = true;
        name_error_message.value = `Por favor, utilice sólo letras latinas`;
        return;
    }
    if (name.val.match(/\s{2,}/)) {
        name_error.value = true;
        name_error_message.value = `Por favor, no utilice varios espacios en blanco`;
        return;
    }
    name_error.value = false;
}
const handle_phone_input = function () {
    if (phone_input.value && phone.val.length < 4) {
        phone.val = '+57'
    }
    const match = phone.val.match(phone_pattern);
    if (!(match && match[0] === phone.val)) {
        phone_error.value = true;
        phone_error_message.value = `Por favor, introduzca el número\n en formato '+571234567890'`;
        return;
    }
    phone_error.value = false;
}
const focus_form = function () {
    order_form.value?.scrollIntoView({ behavior: 'smooth', block: 'center' });
}
const time = reactive({ value: '' });
let start = 1140;
setInterval(() => {
    if (start == 0) return;
    start -= 1;
    const m = Math.ceil((start + 1) / 60);
    const s = start % 60;
    time.value = `${m < 10 ? '0' + m : m} : ${s < 10 ? '0' + s : s}`;
}, 1000);
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('blink');
        } else {
            entry.target.classList.remove('blink');
        }
    })
})

onMounted(() => {
    const sbtn = document.querySelector('#submitBtn');
    if (sbtn) observer.observe(sbtn);
})
</script>
<template>
    <div class="order-wrapper">
        <div id="scroll-anchor-form"></div>
        <p class="rub-ramka">
            <span class="myh4">ACTUALIZAT
                <span>{{ today }}:</span>
            </span>
            <b> ¡Importante! </b> Debido al alto número de solicitudes, nos vemos obligados a limitar la duración de
            esta campaña. La etapa actual durará hasta el <span>{{ today }}</span> incluido. Hasta que finalice la
            campaña, todo el mundo puede pedir el producto
            original <a>Procardi</a> a través del <a>sitio web oficial</a> con un 50% de
            descuento.
        </p>
        <div id="scroll-anchor-form2"></div>
        <div class="prod-wrapper">
            <img :src="product" class="prod_img" alt="">
            <div class="price">
                <span class="discount">Descuento!</span>
                <span class="al-cost-promo-test">258000 COP</span>
                <span class="al-cost-test">129000 COP</span>
            </div>
        </div>
        <form ref="order_form" action="/send/send_1.php" id="order-form">
            <input type="hidden" id="geo" name="geo" :value="getParamFromConfig('geo')" />
            <input type="hidden" id="flow_id" name="flow_id" :value="getParamFromConfig('flow_id')" />
            <input type="hidden" id="sub1" name="sub1" :value="getParamFromConfig('sub1')" />
            <input type="hidden" id="sub2" name="sub2" :value="getParamFromConfig('sub2')" />
            <input type="hidden" id="sub3" name="sub3" :value="getParamFromConfig('sub3')" />
            <input type="hidden" id="sub4" name="sub4" :value="getParamFromConfig('sub4')" />
            <input type="hidden" id="sub5" name="sub5" :value="getParamFromConfig('sub5')" />
            <div class="timer">{{ time.value }}</div>
            <div class="input-group">
                <label for="name">Nome/Cognome</label>
                <input ref="name_input" @focus="focus_form" @input="handle_name_input" type="text" name="name" id="name"
                    v-model="name.val" required autocomplete="off" minlength="3" placeholder="Nombre">
                <pre v-if="name_error.value" ref="error_name">{{ name_error_message.value }}</pre>
                <pre v-else></pre>
            </div>
            <div class="input-group">
                <label for="phone">Mob.telefono</label>
                <input ref="phone_input" @focus="focus_form" @input="handle_phone_input" type="tel" name="phone"
                    id="phone" v-model="phone.val" required autocomplete="off" maxlength="13">
                <pre v-if="phone_error.value" ref="error_name">{{ phone_error_message.value }}</pre>
                <pre v-else></pre>
            </div>
            <button id="submitBtn" :disabled="name_error.value || phone_error.value ? true : false" type="submit">PEDIR
                >></button>
            <p><b>
                    El número de productos de oferta es limitado. los descuentos todavía están disponibles
                </b></p>
        </form>
    </div>
</template>
<style lang="scss">
.rub-ramka {
    text-indent: 0 !important;
    background: rgba(200, 0, 224, 0.04);
    padding: 6px 13px 18px 13px !important;
    border-radius: 2px;
    border: 4px double rgba(160, 21, 21, 0.32);
    font-family: var(--font-mont);
    line-height: 28px;
    font-size: 16px;
    max-width: 100%;
    margin: 0 auto;
    font-weight: 400;
    color: #4a4a4a;
    margin-bottom: 20px;

    .myh4 {
        padding: 6px 4px 4px 5px;
        width: 100%;
        display: table;
        text-indent: 0;
        padding: 9px 0px 6px 12px;
        width: 100%;
        display: table;
        border: 1px dotted #e2e2e2;
        border-right: none;
        color: #313131;
        margin-top: 10px;
        text-transform: uppercase;
        font-size: 12px;
        line-height: 23px;
        margin-bottom: 15px;
        border-radius: 2px;
        border-left: none;
        margin-left: 0;
        font-weight: 600;
        background-color: rgb(245, 254, 245);
        background-image: -webkit-gradient(linear, 0% 50%, 100% 50%, color-stop(0, rgb(234, 180, 180)), color-stop(1, rgb(245, 254, 245)));
        background-image: -webkit-repeating-linear-gradient(0deg, rgb(234, 180, 180) 0%, rgb(245, 254, 245) 100%);
        background-image: repeating-linear-gradient(90deg, rgb(234, 180, 180) 0%, rgb(245, 254, 245) 100%);
        background-image: -ms-repeating-linear-gradient(0deg, rgb(234, 180, 180) 0%, rgba(3, 224, 0, 0.04) 100%);
    }
}

.prod-wrapper {
    margin: 0px;
    padding: 0px;
    border: 0px none;
    font-family: inherit;
    font-style: inherit;
    font-weight: inherit;
    line-height: inherit;
    font-size-adjust: inherit;
    font-stretch: inherit;
    font-feature-settings: inherit;
    font-language-override: inherit;
    font-kerning: inherit;
    font-synthesis: inherit;
    font-variant: inherit;
    font-size: 100%;
    vertical-align: baseline;
    max-width: 300px;
    width: 100%;
    margin: 0 auto 15px;
    position: relative;
    text-align: center;

    img {
        display: inline-block;
        max-width: 100%;
        width: auto;
        margin: 0 auto;

        @media screen and (max-width: 500px) {
            max-width: 200px;
        }
    }

    .price {
        display: -webkit-box;
        display: -ms-flexbox;
        display: flex;
        -webkit-box-orient: vertical;
        -webkit-box-direction: normal;
        -ms-flex-direction: column;
        flex-direction: column;
        -webkit-box-align: center;
        -ms-flex-align: center;
        align-items: center;
        -webkit-box-pack: center;
        -ms-flex-pack: center;
        justify-content: center;
        font: 700 23px/1.3 "Arial", sans-serif;
        text-align: center;
        width: 165px;
        height: 110px;
        position: absolute;
        right: 5px;
        bottom: 0;
        top: inherit;
        left: inherit;
        color: #000;
        -webkit-box-shadow: rgba(0, 0, 0, 50%) 0px 3px 16px;
        box-shadow: rgba(0, 0, 0, 50%) 0px 3px 16px;
        -webkit-transform: rotateZ(-7deg);
        transform: rotateZ(-7deg);
        margin: 0 auto;
        padding: 0;
        background: -webkit-gradient(linear, left top, right top, from(rgb(238, 165, 19)), to(rgb(253, 237, 19)));
        background: linear-gradient(to right, rgb(238, 165, 19) 0%, rgb(253, 237, 19) 100%);
        border-width: 2px;
        border-style: solid;
        border-color: rgb(255, 255, 255);
        -o-border-image: initial;
        border-image: initial;
        border-radius: 19%;

        .al-cost-promo-test {
            font-family: inherit;
            font-size: inherit;
            line-height: inherit;
            font-weight: 700;
            text-decoration: line-through;
        }

        .al-cost-test {
            font-size: 24px;
            color: red;
            border-bottom: 2px solid #d31812;
            margin: 0 auto;
            padding: 0;
            font-family: inherit;
            font-size: inherit;
            line-height: inherit;
            font-weight: 700;
        }
    }
}

.input-group {
    label {
        display: block;
        font-size: 18px;
        font-style: normal;
        font-weight: 500;
        font-family: var(--font-mont) !important;
        margin: 0 auto !important;
        width: 100%;
        max-width: 400px;
    }

    input {
        display: block;
        font-size: 18px;
        font-style: normal;
        font-weight: 500;
        font-family: var(--font-mont) !important;
        width: 100%;
        max-width: 400px;
        height: 45px;
        border: 2px solid grey;
        border-radius: 5px;
        margin: 0 auto !important;
        padding: 0 10px;
        box-sizing: border-box;
        color: #000;

        &::placeholder {
            font-family: var(--font-mont);
        }
    }

    pre {
        font-family: var(--font-mont);
        font-size: 14px;
        line-height: 18px;
        display: block;
        min-height: 24px;
        margin: 0 auto;
        max-width: 400px;
        width: 100%;
        text-align: center;
        color: red;
        animation: error_blink .7s;
    }


}

form#order-form {
    .timer {
        color: red;
        font-family: var(--font-mont);
        font-size: 20px;
        font-weight: 700;
        text-align: center;
        padding: 5px;
    }

    p {
        font-family: var(--font-mont);
    }

    button {
        display: block;
        margin: 10px auto 30px;
        padding: 1rem 4rem;
        font-size: 24px;
        line-height: 1.2;
        font-weight: 700;
        text-align: center;
        text-decoration: none;
        color: #fff;
        background: #de0606;
        border-radius: 4px;
        border: none;
        cursor: pointer;
        font-family: var(--font-mont);

        &:disabled {
            background-color: rgba(239, 239, 239, 0.3);
            color: rgba(16, 16, 16, 0.3);
            border-color: rgba(118, 118, 118, 0.3);
        }

        &.blink {
            animation: error_blink_btn 1s;
        }
    }
}

@keyframes error_blink {
    0% {
        color: #f00;
    }

    49% {
        color: #fff;
    }

    60% {
        color: #f00;
    }

    99% {
        color: #fff;
    }

    100% {
        color: #f00;
    }
}

@keyframes error_blink_btn {
    0% {
        color: #f00;
        background-color: transparent;
    }

    49% {
        color: #fff;
        background-color: #f00;
    }

    60% {
        color: #f00;
        background-color: transparent;

    }

    99% {
        color: #fff;
        background-color: #f00;

    }

    100% {
        color: #f00;
        background-color: transparent;
    }
}
</style>