<template>
  <label class="menu-reg-label">
    {{ title }}
    <div class="password">
      <input
        id="reg-pass"
        :type="inputType"
        class="menu-reg-input"
        v-model="localValue"
      />
      <a
        href="#"
        class="password-control"
        :class="{ view: inputType === 'text' }"
        @click.prevent="togglePasswordVisibility"
      ></a>
    </div>
  </label>
</template>

<script setup>
import { computed, defineProps, defineEmits } from "vue";
const props = defineProps({
  modelValue: String,
  title: String,
});

const emit = defineEmits(["update:modelValue"]);
const inputType = ref("password");
const localValue = computed({
  get: () => props.modelValue,
  set: (newValue) => {
    emit("update:modelValue", newValue);
  },
});

// Переключение между видимостью и скрытием пароля
function togglePasswordVisibility() {
  inputType.value = inputType.value === "password" ? "text" : "password";
}
</script>
