<template>
  <div class="reg-sailor-buttons">
    <button class="reg-sailor-button reg-sailor-blue" @click="emitRegister">
      Зарегистрироваться
      <span>→</span>
    </button>
    <button class="reg-sailor-button about-button-blue" @click="emitLogin">
      Войти
      <span>→</span>
    </button>
  </div>
</template>

<script setup>
import { defineEmits } from "vue";
const emit = defineEmits(["register", "login"]);

function emitRegister() {
  emit("register");
}

function emitLogin() {
  emit("login");
}
</script>

<style lang="scss" scoped></style>
