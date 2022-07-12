import { createApp } from "vue";
import { createPinia } from "pinia";
import App from "./App.vue";
import product from "@/assets/product.png";
import "@/assets/base.css";
import "normalize.css";

if (typeof window.lmt_config === "undefined") {
  window.lmt_config = {
    product_name: "Procardi",
    product_image: product,
    offer_link: "https://example.com",
    modal_shown: false,
    name_pattern: /.*/,
    tel_pattern: /.*/,
    form_params: {},
    validity: {
      tel_error: "",
      name_error: "",
    },
  };
}

if (typeof window.lmt_config.product_name === "undefined") {
  window.lmt_config.product_name = "Procardi";
}

if (typeof window.lmt_config.product_image === "undefined") {
  window.lmt_config.product_image = product;
}

if (typeof window.lmt_config.modal_shown === "undefined") {
  window.lmt_config.modal_shown = false;
}

window.addEventListener("blur", () => {
  (document.querySelector("#fvc") as HTMLLinkElement).href = "favicon2.jpg";
});

window.addEventListener("focus", () => {
  (document.querySelector("#fvc") as HTMLLinkElement).href = "favicon.jpg";
});

const app = createApp(App);

app.use(createPinia());

app.mount("#app");
