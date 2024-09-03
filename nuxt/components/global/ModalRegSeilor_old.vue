<template>
  <div
    class="menu-reg menu-none menu-reg-sailor cabinet"
    id="reg-sailor"
    :class="{ 'menu-show': isOpen }"
  >
    <AfCloseModal modalName="seilor" />
    <div class="menu-reg-title">Регистрация моряка</div>

    <div class="resume-grid cabinet">
      <AfInput
        place="Почта"
        label="Email"
        type="email"
        id="email_input"
        v-model="formData.email"
        :showCheckbox="true"
        v-model:checkboxValue="formData.notification_settings.send_email"
        :error="v$.email.$error && v$.email.required.$invalid"
      />
      <AfInput
        place="Телефон"
        label="Номер телефона"
        type="tel"
        id="phone_input"
        v-model="formData.phone_number"
        :showCheckbox="true"
        v-model:checkboxValue="formData.notification_settings.send_sms"
        :error="v$.phone_number.$error && v$.phone_number.required.$invalid"
      />
      <AfInput
        place="Ник в telegram"
        label="Ник в telegram"
        type="email"
        id="telegram_input"
        v-model="formData.telegram"
        :showCheckbox="true"
        v-model:checkboxValue="formData.notification_settings.send_telegram"
        :error="v$.telegram.$error && v$.telegram.required.$invalid"
      />
      <AfInput
        place="Иванов"
        label="Фамилия"
        id="family_input"
        v-model="formData.first_name"
        :error="v$.first_name.$error && v$.first_name.required.$invalid"
      />
      <AfInput
        place="Иван"
        label="Имя"
        id="name_input"
        v-model="formData.last_name"
        :error="v$.last_name.$error && v$.last_name.required.$invalid"
      />
      <AfInput
        place="Иванович"
        label="Отчество"
        id="lastname_input"
        v-model="formData.patronymic"
        :error="v$.patronymic.$error && v$.patronymic.required.$invalid"
      />
      <AfInput
        place="Россия"
        label="Страна (где находитесь)"
        id="lastname_input"
        v-model="formData.country"
        :error="v$.country.$error && v$.country.required.$invalid"
      />
      <AfInput
        place="Регион"
        label="Приморский край"
        id="lastname_input"
        v-model="formData.region"
        :error="v$.region.$error && v$.region.required.$invalid"
      />
      <AfInput
        place="Город"
        label="Владивосток"
        id="lastname_input"
        v-model="formData.city"
        :error="v$.city.$error && v$.city.required.$invalid"
      />
    </div>
    <AfDropDox v-model="formData.positions" :options-list="professionalList" />
    <AfDropDox
      v-model="formData.worked"
      :options-list="seilorList"
      title="Работал на судах (выбрать типа судов из списка)"
    />
    <div class="reg-sailor-inputs">
      <AfInputPassword v-model="formData.password" title="Укажите пароль" />
      <AfInputPassword v-model="formData.confirm_password" title="Подтвердите пароль" />
    </div>

    <div class="reg-sailor-end">
      <div class="resume-contact__second">
        <AfCheckbox v-model="formData.notification_settings.mailing_notification" />
      </div>

      <AfGroupBtn @register="handleRegistration()" />
    </div>
  </div>
  <div
    :class="['header-overlay', { 'header-overlay__active': isOpen }]"
    @click="closeModal('seilor')"
  ></div>
</template>

<script setup>
import AfInput from "@/components/uikit/AfInput";
import AfInputPassword from "@/components/uikit/AfInputPassword";
import AfCheckbox from "@/components/uikit/AfCheckbox";
import AfGroupBtn from "@/components/uikit/AfGroupBtn";
import AfCloseModal from "@/components/uikit/AfCloseModal";
import AfDropDox from "@/components/uikit/AfDropDox";
import useVuelidate from "@vuelidate/core";
import { required, email, minLength } from "@vuelidate/validators";
import { useModalStore } from "~/store/modal";
import { useUsersStore } from "~/store/useUserStore";
import { ref } from "vue";

const { signIn } = useUsersStore();
const { closeModal } = useModalStore();

const props = defineProps({
  isOpen: {
    type: Boolean,
  },
});

const professionalList = ref([
  "Капитан",
  "Старший помощник капитана",
  "Матрос",
  "Боцман",
  "Штурман",
]);
const seilorList = ref([
  "Контейнеровозы",
  "Танкеры",
  "Буксиры",
  "Ледоколы",
  "Пассажирские",
  "Рыболовные",
  "Военные",
]);

const formData = ref({
  email: "",
  password: "",
  confirm_password: "",
  phone_number: "",
  first_name: "",
  last_name: "",
  patronymic: "",
  country: "",
  region: "",
  city: "",
  telegram: "",
  positions: [],
  worked: [],
  notification_settings: {
    send_email: true,
    send_sms: true,
    send_telegram: true,
    mailing_notification: true,
  },
});

const isSameAsPassword = (value) => {
  return value === formData.value.password;
};

const rules = {
  email: { required, email },
  password: { required, minLength: minLength(1) },
  confirm_password: {
    required,
    sameAsPassword: {
      $validator: isSameAsPassword,
      $message: "Пароли должны совпадать",
    },
  },
  phone_number: { required },
  first_name: { required },
  last_name: { required },
  patronymic: { required },
  country: { required },
  region: { required },
  city: { required },
  telegram: { required },
};

const v$ = useVuelidate(rules, formData);
const prepareDataForSending = () => {
  const preparedData = {
    ...formData.value,
    positions: formData.value.positions.map((position) => ({ position_name: position })),
    worked: formData.value.worked.map((work) => ({ worked: work })),
  };

  return preparedData;
};

const handleRegistration = () => {
  v$.value.$touch();
  if (!v$.value.$error) {
    const dataToSubmit = prepareDataForSending();
    signIn(dataToSubmit, "user");
    closeModal("seilor");
  } else {
    console.log("Validation errors:", v$.value.$errors);
  }
};
</script>

<style lang="scss" scoped></style>
