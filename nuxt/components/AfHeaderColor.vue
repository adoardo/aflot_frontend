<template>
  <header class="header">
    <div class="container">
      <div class="header-block">
        <AfLogo type="blue" />

        <div class="header-content">
          <a for="header-search" class="header-search header-search-color">
            <span class="fa fa-search header-search__icon"></span>
            <div class="header-search__text">Поиск</div>
          </a>

          <a class="header-notif"
            ><img src="assets/img/header/red-notif.svg" alt="image"
          /></a>

          <a class="header-lk header-lk-color" @click="openModal()">
            <i class="fa fa-user-o header-lk__icon"></i>
            <div class="header-lk__text">личный кабинет</div>
          </a>

          <div id="mobile" class="mobile mobile-color" @click="toggleModal('menu')">
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
import { useUsersStore, useUsersStoreRefs } from "~/store/useUserStore";

const { toggleModal } = useModalStore();
const { user } = useUsersStoreRefs();

function openModal() {
  switch (user.value.info.role) {
    case "Моряк":
      return toggleModal("authSeilor");
    case "Компания":
      return toggleModal("authCompany");
    default:
      return toggleModal("lk");
  }
}
</script>

<style lang="scss" scoped></style>
