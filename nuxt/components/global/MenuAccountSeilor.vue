<template>
  <div
    class="menu-reg menu-none menu-reg-sailor cabinet"
    id="reg-sailor-lk"
    :class="['menu-reg menu-none', { 'menu-show': isOpen }]"
  >
    <div class="menu-lk-top">
      <div class="menu-lk-title">Личный кабинет</div>
      <div
        class="header-close menu-close-gray close-lk-sailor"
        @click="closeModal('authSeilor')"
      >
        <span class="header-close__icon"></span>
        <div class="header-close__text" id="close-reg-sailor">закрыть</div>
      </div>
    </div>

    <div class="menu-lk-content">
      <img src="assets/img/menu/sailor-lk.svg" alt="image" class="menu-lk-img" />
      <div class="menu-lk-info">
        <div class="menu-lk-subtitle">{{ user.info.email }}</div>

        <select class="menu-lk-select">
          <option class="menu-lk-option">Рассмотрю варианты</option>
          <option class="menu-lk-option">Вариант №1</option>
          <option class="menu-lk-option">Вариант №2</option>
        </select>

        <div class="menu-lk-text">
          Статус «Ищу работу» повышает вероятность получения предложений в 3 раза!
        </div>
      </div>
    </div>

    <div class="menu-lk-part">
      <NuxtLink :to="item.link" class="menu-lk-link" v-for="item in MenuSeilorUser">
        <img :src="'/img/menu/' + item.icon" alt="image" class="menu-lk-icon" />
        <span class="menu-lk-ltext">{{ item.name }}</span>
      </NuxtLink>
    </div>
  </div>
  <div
    :class="['header-overlay', { 'header-overlay__active': isOpen }]"
    @click="closeModal('authSeilor')"
  ></div>
</template>

<script setup>
import { useModalStore } from "~/store/modal";
import { useUsersStoreRefs } from "~/store/useUserStore";
import { MenuSeilorUser } from "~/consts/MenuSeilorUser";

const { closeModal, toggleModal } = useModalStore();
const { user } = useUsersStoreRefs();

const props = defineProps({
  isOpen: {
    type: Boolean,
  },
});
</script>

<style lang="scss" scoped></style>
