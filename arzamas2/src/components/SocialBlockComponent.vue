<script lang="ts" setup>
import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import {
  faFacebookMessenger,
  faWhatsapp,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";
library.add(faFacebookMessenger, faWhatsapp, faTwitter);
</script>

<template>
  <div class="social-block">
    <div class="social-block__item">
      <font-awesome-icon icon="fa-brands fa-facebook-messenger" />
    </div>
    <div class="social-block__item">
      <font-awesome-icon icon="fa-brands fa-whatsapp" />
    </div>
    <div class="social-block__item">
      <font-awesome-icon icon="fa-brands fa-twitter" />
    </div>
  </div>
</template>
