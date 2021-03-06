<script lang="ts" setup>
import { reactive } from "vue";
import banner_bg from "@/assets/bannerbg.jpg";
import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import { faXmark } from "@fortawesome/free-solid-svg-icons";
import type { FormParamsKey } from "../types";
library.add(faXmark);
const close = function () {
  emit("close");
};
const emit = defineEmits(["close"]);
const getParamFromConfig = function (name: string): string {
  return window.lmt_config.form_params[name as FormParamsKey];
};
const name_input = reactive({ val: "" });
const tel_input = reactive({ val: "" });
const validate_input = function (i_value: string, regex: RegExp) {
  const match = i_value.match(regex);
  return match && i_value === match[0];
};
const submit = function () {
  console.log("validating");

  const form = document.querySelector("#order-form-modal") as HTMLFormElement;
  const _name_input = form.querySelector("#name") as HTMLInputElement;
  const _tel_input = form.querySelector("#phone") as HTMLInputElement;
  if (!validate_input(name_input.val, window.lmt_config.name_pattern)) {
    _name_input.setCustomValidity(window.lmt_config.validity.name_error);
    _name_input.reportValidity();
    return;
  }

  if (!validate_input(tel_input.val, window.lmt_config.phone_pattern)) {
    _tel_input.setCustomValidity(window.lmt_config.validity.phone_error);
    _tel_input.reportValidity();
    return;
  }

  _name_input.setCustomValidity("");
  _tel_input.setCustomValidity("");
  form.submit();
};

const name_input_handler = function (event: Event) {
  const _name_input = event.target as HTMLInputElement;
  name_input.val = _name_input.value;
  _name_input.setCustomValidity("");
  _name_input.reportValidity();
};

const tel_input_handler = function (event: Event) {
  const _tel_input = event.target as HTMLInputElement;
  tel_input.val = _tel_input.value;
  _tel_input.setCustomValidity("");
  _tel_input.reportValidity();
};
</script>
<template>
  <div class="form-modal-container" @click="close">
    <div class="modal-form" @click.stop>
      <div
        class="modal-form__banner"
        :style="{ backgroundImage: `url(${banner_bg})` }"
      >
        <div @click.prevent="close" class="modal-cross2">
          <font-awesome-icon icon="fa-solid fa-xmark" />
        </div>
        <div class="modal-form__banner-overlay">
          <p class="head1">-50%</p>
          <p class="head2">¡descuento ya te está esperando!</p>
          <p class="form-price-old">258000 cop</p>
          <p class="form-price-new">129000 cop</p>
        </div>
      </div>
      <form
        id="order-form-modal"
        action="/send/send_1.php"
        class="modal-form__form"
      >
        <input
          type="hidden"
          id="geo"
          name="geo"
          :value="getParamFromConfig('geo')"
        />
        <input
          type="hidden"
          id="flow_id"
          name="flow_id"
          :value="getParamFromConfig('flow_id')"
        />
        <input
          type="hidden"
          id="sub1"
          name="sub1"
          :value="getParamFromConfig('sub1')"
        />
        <input
          type="hidden"
          id="sub2"
          name="sub2"
          :value="getParamFromConfig('sub2')"
        />
        <input
          type="hidden"
          id="sub3"
          name="sub3"
          :value="getParamFromConfig('sub3')"
        />
        <input
          type="hidden"
          id="sub4"
          name="sub4"
          :value="getParamFromConfig('sub4')"
        />
        <input
          type="hidden"
          id="sub5"
          name="sub5"
          :value="getParamFromConfig('sub5')"
        />
        <div @click.prevent="close" class="modal-cross1">
          <font-awesome-icon icon="fa-solid fa-xmark" />
        </div>
        <p class="form-note">
          Se le aprueba un <span>descuento del 50%</span> en todo su pedido (a
          partir de dos latas). Deje sus datos de contacto en el siguiente
          formulario:
        </p>
        <input
          :value="name_input.val"
          @input="name_input_handler"
          type="text"
          name="name"
          id="name"
          placeholder="Su nombre:"
          required
        />
        <input
          :value="tel_input.val"
          @input="tel_input_handler"
          type="tel"
          name="phone"
          id="phone"
          placeholder="Su número de teléfono:"
          required
        />
        <button type="submit" @click.prevent="submit" class="submit-btn">
          PEDIR >>
        </button>
        <p class="form-note-b">
          Las solicitudes se aceptan y tramitan las 24 horas del día, los 7 días
          de la semana. El descuento sólo es válido para pedidos de 2 paquetes o
          más a través del formulario anterior.
        </p>
      </form>
    </div>
  </div>
</template>

<style lang="scss" scoped>
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
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  background-color: rgba($color: #000000, $alpha: 0.6);
  display: flex;
  justify-content: center;
  align-items: center;
  font-family: "Arial Black", "Roboto";
  padding: 10px;
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
      flex: 0 1 406px;
      text-align: center;
      color: #fff;
      height: 428px;
      position: relative;
      border-radius: 20px 0 0 20px;
      overflow: hidden;

      @media screen and (max-width: 655px) {
        flex: 1 1 auto;
        border-radius: 20px 20px 0 0;
        height: auto;
      }

      .head1 {
        font-size: 80px;
        font-weight: 900;
        margin: 0;
        line-height: 113px;
        color: #f1ff51;

        @media screen and (max-width: 970px) {
          font-size: 60px;
          line-height: 80px;
        }
      }

      .head2 {
        font-size: 30px;
        line-height: 42px;
        margin: 0;
        text-transform: uppercase;

        @media screen and (max-width: 970px) {
          font-size: 24px;
          line-height: 30px;
        }
      }

      .form-price-old {
        font-size: 28px;
        line-height: 32px;
        font-weight: 700;
        text-decoration: line-through;
        color: #e7cbcb;

        @media screen and (max-width: 655px) {
          margin: 5px;
        }
      }

      .form-price-new {
        font-size: 45px;
        line-height: 63px;
        font-weight: 900;
        color: #f1ff51;
        margin: 0;

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
      flex: 0 1 497px;
      background: #fff9f7;
      border-width: 1px 1px 1px 0px;
      border-style: solid;
      border-color: rgba(171, 171, 171, 0.7);
      border-radius: 0px;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      padding: 50px;
      padding-bottom: 0;
      position: relative;
      border-radius: 0 20px 20px 0;
      overflow: hidden;

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
        border-radius: 0 0 20px 20px;
        padding: 20px 20px 0;
        flex: 1 1 auto;
        line-height: 1.15 !important;

        .form-note {
          line-height: 1.15 !important;
        }
      }

      .form-note {
        font-family: var(--font-pt);

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
        font-family: var(--font-pt);

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
        font-family: var(--font-mont);
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
        font-family: var(--font-pt);
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
      padding: 1px;
      display: flex;
      justify-content: center;
      flex-direction: column;
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
