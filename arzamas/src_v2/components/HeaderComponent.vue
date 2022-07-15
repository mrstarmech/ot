<script setup lang="ts"></script>
<template>
  <div class="page-header">
    <div class="page-header__item burger"></div>
    <div class="page-header__item logo">
      <img src="@/assets/logo.png" alt="ENSAJERO" />
    </div>
    <div class="page-header__item search"></div>
  </div>
</template>

<style lang="scss">
.page-header {
  display: flex;
  justify-content: space-between;
  background-color: #2a6ebb;
  animation: header-in 0.5s ease-in-out;

  &__item {
    height: 60px;
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 24px;
    cursor: pointer;

    &:first-child {
      flex: 0 0 60px;
      width: 60px;
      background: url(data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIHZpZXdCb3g9IjAgMCAyNCAyNCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cGF0aCBkPSJNNCA1SDIwVjdINFY1WiIgZmlsbD0id2hpdGUiLz48cGF0aCBkPSJNNCAxMUgyMFYxM0g0VjExWiIgZmlsbD0id2hpdGUiLz48cGF0aCBkPSJNNCAxN0gyMFYxOUg0VjE3WiIgZmlsbD0id2hpdGUiLz48L3N2Zz4=)
        50% 50% no-repeat;

      &:after {
        content: "";
        width: 1px;
        height: 32px;
        display: block;
        position: absolute;
        top: 14px;
        right: 0;
        background: rgba(255, 255, 255, 0.2);
      }
    }

    &:last-child {
      flex: 0 0 60px;
      width: 60px;
      background: url(data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIHZpZXdCb3g9IjAgMCAyNCAyNCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cGF0aCBkPSJNMTYgMTZMMjEgMjFNMTggMTFDMTggMTQuODY2IDE0Ljg2NiAxOCAxMSAxOEM3LjEzNDAxIDE4IDQgMTQuODY2IDQgMTFDNCA3LjEzNDAxIDcuMTM0MDEgNCAxMSA0QzE0Ljg2NiA0IDE4IDcuMTM0MDEgMTggMTFaIiBzdHJva2U9IndoaXRlIiBzdHJva2Utd2lkdGg9IjIiLz48L3N2Zz4=)
        50% 50% no-repeat;

      &::before {
        content: "";
        width: 1px;
        height: 32px;
        display: block;
        position: absolute;
        top: 14px;
        left: 0;
        background: rgba(255, 255, 255, 0.2);
      }
    }

    img {
      display: block;
      max-width: min(80%, 256px);
    }
  }
}

@keyframes header-in {
  0% {
    transform: translate(0, -100%);
  }
  100% {
    transform: translate(0, 0);
  }
}
</style>
