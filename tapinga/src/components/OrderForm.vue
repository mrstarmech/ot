<script lang="ts" setup>
import { reactive } from 'vue';
import banner_bg from "@/assets/banner-bg.jpg";
import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import { faXmark } from "@fortawesome/free-solid-svg-icons";
library.add(faXmark);
const close = function () {
  emit("close");
};
const emit = defineEmits(["close"]);
const getParamFromConfig = function (name: string): string {
  //@ts-ignore
  return window.lmt_config.form_params[name];
}
const product_name = window.lmt_config.product_name;
const name_input = reactive({ val: '' });
const tel_input = reactive({ val: '' });
const validate_input = function (i_value: string, regex: RegExp) {
  const match = i_value.match(regex);
  return match && i_value === match[0];
}
const submit = function (event: Event) {
  console.log('validating');

  const form = document.querySelector('#order-form-modal') as HTMLFormElement;
  const _name_input = (form.querySelector('#name') as HTMLInputElement);
  const _tel_input = (form.querySelector('#phone') as HTMLInputElement);
  if (!validate_input(name_input.val, window.lmt_config.name_pattern)) {
    _name_input.setCustomValidity(window.lmt_config.validity.name_error);
    _name_input.reportValidity();
    return
  }

  if (!validate_input(tel_input.val, window.lmt_config.tel_pattern)) {
    _tel_input.setCustomValidity(window.lmt_config.validity.tel_error);
    _tel_input.reportValidity();
    return
  }

  _name_input.setCustomValidity('');
  _tel_input.setCustomValidity('');
  form.submit();
}

const name_input_handler = function (event: Event) {
  const _name_input = (event.target as HTMLInputElement);
  name_input.val = _name_input.value;
  _name_input.setCustomValidity('');
  _name_input.reportValidity();
}

const tel_input_handler = function (event: Event) {
  const _tel_input = (event.target as HTMLInputElement);
  tel_input.val = _tel_input.value;
  _tel_input.setCustomValidity('');
  _tel_input.reportValidity();
}
</script>
<template>
  <div id="order-form" class="form-modal-container" @click="close">
    <div class="modal-form" @click.stop>
      <div class="modal-form__banner" :style="{ backgroundImage: `url(${banner_bg})` }">

        <div class="modal-form__banner-overlay">
          <p class="head1">{{product_name}}</p>
          <p class="form-price-old">167 700 cop</p>
          <p class="form-price-new">129 000 cop</p>
          <p class="head2">Un nuevo y probado producto de recuperación del sistema circulatorio aprobado por los profesionales. Contiene ingredientes naturales.</p>
          <p class="head3">¡Atención! El producto es un suplemento dietético y no es un medicamento.</p>
        </div>
      </div>
      <form id="order-form-modal" action="/send/send_1.php" class="modal-form__form">
        <input type="hidden" id="geo" name="geo" :value="getParamFromConfig('geo')">
        <input type="hidden" id="flow_id" name="flow_id" :value="getParamFromConfig('flow_id')">
        <input type="hidden" id="sub1" name="sub1" :value="getParamFromConfig('sub1')">
        <input type="hidden" id="sub2" name="sub2" :value="getParamFromConfig('sub2')">
        <input type="hidden" id="sub3" name="sub3" :value="getParamFromConfig('sub3')">
        <input type="hidden" id="sub4" name="sub4" :value="getParamFromConfig('sub4')">
        <input type="hidden" id="sub5" name="sub5" :value="getParamFromConfig('sub5')">

        <p class="form-note">
          Obtenga un descuento <span>exclusivo del 30%</span> en su pedido. Deje sus datos de contacto en el siguiente
          formulario:
        </p>
        <input :value="name_input.val" @input="name_input_handler" type="text" name="name" id="name"
          placeholder="Su nombre:" required />
        <input :value="tel_input.val" @input="tel_input_handler" type="tel" name="phone" id="phone"
          placeholder="Su número de teléfono:" required />
        <button type="submit" @click.prevent="submit" class="submit-btn">PEDIR >></button>
        <p class="form-note-b">
          Las solicitudes se aceptan y tramitan las 24 horas del día, los 7 días de la semana. El descuento sólo está disponible si realiza un pedido a través de este formulario.
        </p>
      </form>
    </div>
  </div>
</template>

<style lang="scss">
.modal-cross1 {
  position: absolute;
  width: 60px;
  height: 60px;
  top: 5px;
  right: 5px;
  font-size: 45px;
  text-align: center;
  color: red;
  cursor: pointer;

  @media screen and (max-width: 655px) {
    display: none;
  }
}

@keyframes flash {

  0%,
  50%,
  100% {
    opacity: 1;
  }

  25%,
  75% {
    opacity: 0.2;
  }
}

.modal-cross2 {
  display: none;
  position: absolute;
  width: 60px;
  height: 60px;
  top: 5px;
  right: 5px;
  font-size: 45px;
  text-align: center;
  color: white;
  cursor: pointer;

  @media screen and (max-width: 655px) {
    display: block;
  }
}

.form-modal-container {
  display: flex;
  justify-content: center;
  align-items: center;
  font-family: "Arial", "Lato";
  padding: 10px 0;
  z-index: 999;

  .modal-form {
    display: flex;
    justify-content: center;
    position: relative;
    width: 100%;
    max-width: 100%;
    margin: 0 auto;
    animation: modal-form-in 0.1s linear;

    @media screen and (max-width: 655px) {
      flex-direction: column;
    }

    &__banner {
      background-position: center center;
      background-size: cover;
      background-repeat: no-repeat;
      flex: 0 1 50%;
      text-align: center;
      color: #fff;
      position: relative;
      overflow: hidden;
      border-radius: 5px 0 0 5px;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      

      @media screen and (max-width: 655px) {
        flex: 1 1 auto;
        height: auto;
        border-radius: 5px 5px 0 0;

      }

      .head1 {
        font-size: 60px;
        font-weight: 700;
        margin: 0 0 20px;
        line-height: 75px;
        color: #fff9f9;

        @media screen and (max-width: 970px) {
          font-size: 40px;
          line-height: 50px;
          margin-bottom: 0;
        }
      }

      .head2 {
        font-size: 16px;
        margin: 0;
        text-align: left;
        @media screen and (max-width: 655px) {
          text-align: center;
        }
      }
      .head3 {
        font-size: 10px;
        text-align: left;
        color: #ffbfbf;
        @media screen and (max-width: 655px) {
          text-align: center;
        }
      }

      .form-price-old {
        text-align: left;
        font-size: 28px;
        line-height: 32px;
        font-weight: 700;
        margin: 0;
        text-decoration: line-through;
        color: #e7cbcb;

        @media screen and (max-width: 655px) {
          margin: 5px;
        }
      }

      .form-price-new {
        font-size: 45px;
        line-height: 63px;
        font-weight: 600;
        color: #f1ff51;
        margin: 0;
        text-align: left;

        @media screen and (max-width: 970px) {
          font-size: 36px;
          line-height: 42px;
        }

        @media screen and (max-width: 655px) {
          margin-bottom: 10px;
        }
      }
    }

    &__form {
      flex: 0 1 50%;

      background: #fff9f7;
      border-width: 1px 1px 1px 0px;
      border-style: solid;
      border-color: rgba(171, 171, 171, 0.7);
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      padding: 50px;
      padding-bottom: 15px;
      padding-top: 30px;
      position: relative;
      overflow: hidden;
      border-radius: 0 5px 5px 0;

      @media screen and (max-width: 970px) {
        padding: 40px;
        padding-bottom: 0;
      }

      @media screen and (max-width: 768px) {
        padding-top: 20px;
        padding-bottom: 0;
      }

      @media screen and (max-width: 655px) {
        border-width: 0 1px 1px 1px;
        border-style: solid;
        border-color: rgba(171, 171, 171, 0.7);
        padding: 20px 20px 0;
        flex: 1 1 auto;
        line-height: 1.15 !important;
        border-radius: 0 0 5px 5px;


        .form-note {
          line-height: 1.15 !important;
        }
      }

      .form-note {
        font-family: "Lato";
        font-style: normal;
        font-weight: 400;
        font-size: 16px;
        line-height: 24px;
        color: #ff8484;

        span {
          color: #ff3c3c;
          font-weight: 700;
        }

        @media screen and (max-width: 655px) {
          margin-top: 0;
          margin-bottom: 10px;
        }
      }

      input {
        border: 0;
        background: #fff9f7;
        font-style: normal;
        font-weight: 400;
        font-size: 18px;
        font-family: "Lato";
        line-height: 36px;
        width: 300px;
        max-width: 100%;
        border-bottom: 1px solid #2e3b55;
        outline: none;
        margin-bottom: 20px;
        animation: flash 1s ease-in-out 0.2s;

        &::placeholder {
          color: #cdcdcd;
          line-height: 36px;
          font-size: 18px;
        }

        &:focus,
        &:focus-visible {
          border: 0;
          border-bottom: 1px solid #2e3b55;
        }

        @media screen and (max-width: 655px) {
          margin-bottom: 10px;
        }
      }

      .submit-btn {
        height: 65px;
        background: #6dd42d;
        border-radius: 200px;
        border: 0;
        color: #fff;
        font-family: "Lato";
        font-weight: 700;
        font-size: 24px;
        line-height: 65px;
        width: 300px;
        margin-top: 20px;
        margin-bottom: 20px;
        max-width: 100%;
        cursor: pointer;
        animation: flash 1s ease-in-out 1.2s;
        box-shadow: 0 5px 6px #444;

        @media screen and (max-width: 655px) {
          margin-top: 5px;
          margin-bottom: 15px;
        }
      }

      .form-note-b {
        font-size: 10px;
        font-family: "Lato";
        color: #b1a5a5;

        span {
          font-weight: 700;
          color: #808080;
        }

        margin-top: 0;
        text-align: center;
      }
    }

    &__banner-overlay {
      width: 100%;
      height: 100%;
      background: linear-gradient(180deg, #e30000c4 0%, #fb3333d8 100%);
      padding: 30px;
      display: flex;
      flex-direction: column;
      justify-content: flex-end;
      @media screen and (max-width: 655px) {
          padding: 10px;
          align-items: center;
        }
    }
  }
}

@keyframes modal-form-in {
  0% {
    transform: translateX(110%);
  }

  100% {
    transform: translateX(0);
  }
}
</style>
