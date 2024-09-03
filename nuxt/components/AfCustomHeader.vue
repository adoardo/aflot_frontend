<template>
  <header class="header asdasd">
    <div class="container">
      <div class="header-block">
        <AfLogo />
        <div class="header-content">
          <a for="header-search" class="header-search">
            <span class="fa fa-search header-search__icon"></span>
            <div class="header-search__text">Поиск</div>
          </a>
          <a class="header-notif header-notif-white"
            ><img src="assets/img/header/red-notif.svg" alt="image"
          /></a>
          <a class="header-lk" @click="toggleModal('lk')">
            <i class="fa fa-user-o header-lk__icon"></i>
            <div class="header-lk__text">личный кабинет</div>
          </a>

          <div id="mobile" class="mobile" @click="toggleModal('menu')">
            <span class="mobile-line"> </span>
            <div class="mobile-text">меню</div>
          </div>
        </div>
      </div>
    </div>
  </header>
</template>

<script setup>
import AfLogo from "@/components/uikit/AfLogo";
import { useModalStore } from "~/store/modal";

const { toggleModal } = useModalStore();
</script>

<style lang="scss" scoped></style>
