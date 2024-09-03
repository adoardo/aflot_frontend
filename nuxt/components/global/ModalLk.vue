<template>
  <div id="menu-reg" :class="['menu-reg menu-none', { 'menu-show': isOpen }]">
    <div class="header-close menu-close-gray menu-close-reg" @click="toggleModalLk">
      <span class="header-close__icon"></span>
      <div class="header-close__text" @click="closeModal('lk')">закрыть</div>
    </div>
    <div class="menu-reg-title">Вход или Регистрация</div>
    <form class="menu-reg-form">
      <AfInput
        label="Номер телефона или адрес электронной почты, или ИНН"
        id="login_input"
        v-model="formData.username"
        class="menu-reg-label"
        classInput="menu-reg-input"
      />
      <AfInputPassword
        class="menu-reg-label"
        v-model="formData.password"
        title="Укажите пароль"
      />
      <a href="#" class="menu-reg-link">Забыли пароль?</a>
      <button type="button" class="menu-reg-button" @click="onSubmit">
        Войти <span>→</span>
      </button>
    </form>
    <div class="reg-buttons">
      <button class="reg-button">
        <img src="assets/img/menu/gos.svg" alt="image" class="reg-button-img" />
        <span class="reg-button-text">Войти под аккаунтом Госуслуги</span>
      </button>
      <button class="reg-button">
        <img src="assets/img/menu/vk.svg" alt="image" class="reg-button-img" />
        <span class="reg-button-text">Войти под аккаунтом Вконтакте</span>
      </button>

      <button class="reg-button">
        <img src="assets/img/menu/telegram.svg" alt="image" class="reg-button-img" />
        <span class="reg-button-text">Войти под аккаунтом Telegram</span>
      </button>
    </div>

    <div class="reg-text-gray">или</div>

    <div class="reg-end">
      <button class="reg-end-button reg-end-red" @click="toggleModalLk('company')">
        Регистрация КОМПАНИЯ <span>→</span>
      </button>

      <button class="reg-end-button reg-end-blue" @click="toggleModalLk('seilor')">
        Регистрация МОРЯК <span>→</span>
      </button>
    </div>
  </div>
  <div
    :class="['header-overlay', { 'header-overlay__active': isOpen }]"
    @click="closeModal('lk')"
  ></div>
</template>

<script setup>
import { useModalStore } from "~/store/modal";
import { useUsersStore } from "~/store/useUserStore";
import { ref } from "vue";
import useVuelidate from "@vuelidate/core";
import { required, email, minLength } from "@vuelidate/validators";
import AfInput from "../uikit/AfInput.vue";
import AfInputPassword from "../uikit/AfInputPassword.vue";

const { closeModal, toggleModal } = useModalStore();
const { login } = useUsersStore();

const props = defineProps({
  isOpen: {
    type: Boolean,
  },
});

const formData = ref({
  username: "",
  password: "",
});

const rules = {
  username: { required },
  password: { required, minLength: minLength(8) },
};

const v$ = useVuelidate(rules, formData);

async function toggleModalLk(modalName) {
  closeModal("lk");
  toggleModal(modalName);
}

const onSubmit = async () => {
  v$.value.$touch();
  if (!v$.value.$error) {
    login(formData.value);
    closeModal("lk");
  } else {
    console.log("Validation errors:", v$.value.$errors);
  }
};
</script>

<style lang="scss" scoped></style>
