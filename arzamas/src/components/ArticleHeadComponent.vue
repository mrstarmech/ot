<script setup lang="ts"></script>

<template>
  <header class="article-head">
    <h1 class="article-head__title">
      ¡El aumento de la presión y los dolores de cabeza ya no son un problema!
    </h1>
    <h4 class="article-head__sub-title">
      Julianna Totti, una investigadora de 38 años de un centro de investigación, que se enfrentaba a migrañas
      persistentes y a una presión arterial alta, decidió resolver el problema utilizando sus conocimientos médicos.
    </h4>
    <h5 class="article-head__author">Grabado por <i>Nancy Delgado</i></h5>
    <!-- <SocialBlockComponent /> -->
  </header>
</template>

<style lang="scss">
.article-head {
  &__title {
    font-family: var(--font-pt);
    text-align: center;
    font-size: 30px;

    @media screen and (min-width: 426px) {
      font-size: 40px;
    }
  }

  &__sub-title {
    font-family: var(--font-mont);
    font-size: 1.2em;
    font-weight: 400;
    text-align: center;
  }

  &__author {
    font-family: var(--font-mont);
    font-size: 0.875em;
    font-weight: normal;
    text-align: center;

    i {
      font-weight: 600;
      text-decoration: underline;
    }
  }

  animation: article-in 0.5s ease-in-out;
}

.social-block {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 2px;
  padding: 15px 0;

  &__item {
    flex: 1 1 30%;
    max-width: 115px;
    text-align: center;
    padding: 6px 12px;
    border: 1px solid var(--pale-main-color);
    border-radius: 3px;

    svg {
      vertical-align: -0.25em;
    }
  }
}

@keyframes article-in {
  0% {
    opacity: 0;
  }

  100% {
    opacity: 1;
  }
}
</style>
