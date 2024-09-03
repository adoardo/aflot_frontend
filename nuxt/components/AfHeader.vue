<template>
  <header class="header header-index" :class="{ 'fp-viewing-2': activeSection === 2 }">
    <div class="container">
      <div class="header-block">
        <AfLogo />

        <div class="header-content">
          <a for="header-search" class="header-search">
            <span class="fa fa-search header-search__icon"></span>
            <div class="header-search__text">Поиск</div>
          </a>

          <a class="header-lk" @click="openModal()">
            <i class="fa fa-user-o header-lk__icon"></i>
            <div class="header-lk__text">личный кабинет</div>
          </a>

          <div id="mobile" class="mobile" @click="toggleModal('menu')">
            <span class="mobile-line"> </span>
            <div class="mobile-text">меню</div>
          </div>

          <div class="header-menu" id="menu">
            <div class="header-close" @click="toggleModal('menu')">
              <span class="header-close__icon"></span>
              <div class="header-close__text">закрыть</div>
            </div>
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
import { useGlobalStoreRefs } from "~/store/useGlobalStore";

const { toggleModal } = useModalStore();
const { user } = useUsersStoreRefs();
const { activeSection } = useGlobalStoreRefs();

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
