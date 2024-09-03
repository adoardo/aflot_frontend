<template>
  <div :class="{ 'menu-show': isOpen }" class="menu-reg menu-none menu-reg-sailor cabinet" id="reg-about">
    <AfCloseModal modalName="company" />

    <div class="menu-reg-title">Регистрация компании</div>
    <!-- /.menu-reg-title -->

    <div class="reg-about-top">
      <a href="#" class="reg-about-link">
        <img src="assets/img/menu/logo-about.png" alt="image"></a>
      <!-- /.reg-about-link -->

      <div class="reg-about-inputs">
        <div class="reg-about-intop">
          <div class="input">
            <label for="">Название компании</label>
            <input type="text" placeholder="Название компании">
          </div>

          <div class="input">
            <label for="">ИНН компании</label>
            <input type="text" placeholder="ИНН">
          </div>

          <div class="input">
            <label for="">Адрес компании</label>
            <input type="text" placeholder="Россия, Владивосток">
          </div>

        </div>
        <!-- /.reg-about-intop -->

      </div>
      <!-- /.reg-about-inputs -->
    </div>
    <!-- /.reg-about-top -->

    <div class="reg-about-subtitle">
      Контактная информация:
    </div>
    <!-- /.reg-about-subtitle -->

    <div class="resume-grid cabinet">
      <div class="input">
        <label for="">Email</label>
        <input type="email" placeholder="Почта">

        <div class="resume-contact__second">
          <label class="custom-checkbox">
            <input type="checkbox" checked="">
            <span class="checkmark"></span>
            Получать <a href="#">уведомления</a>
            <br> на указанную почту
          </label>
        </div>
      </div>

      <div class="input">
        <label for="">Номер телефона</label>
        <input type="tel" placeholder="Телефон">


        <div class="resume-contact__second">
          <label class="custom-checkbox">
            <input type="checkbox" checked="">
            <span class="checkmark"></span>
            Получать <a href="#">уведомления</a>
            <br> на указанный телефон
          </label>
        </div>
      </div>

      <div class="input">
        <label for="">Ник в telegram</label>
        <input type="text" placeholder="Ник в telegram">
        <div class="resume-contact__second">
          <label class="custom-checkbox">
            <input type="checkbox" checked="">
            <span class="checkmark"></span>
            Получать <a href="#">уведомления</a>
            <br> на указанный telegram
          </label>
        </div>
      </div>
      <div class="input">
        <label for="">Фамилия</label>
        <input type="text" placeholder="Иванов">
      </div>

      <div class="input">
        <label for="">Имя</label>
        <input type="text" placeholder="Иван">
      </div>

      <div class="input">
        <label for="">Отчество</label>
        <input type="text" placeholder="Иванович">
      </div>




    </div>






    <div class="reg-sailor-inputs">
      <label class="menu-reg-label">
        Укажите пароль
        <div class="password">
          <input id="reg-pass" type="password" class="menu-reg-input">
          <a href="#" class="password-control" onclick="return show_hide_password(this);"></a>
        </div>
      </label>

      <label class="menu-reg-label">
        Подтвердите пароль
        <div class="password">
          <input id="reg-pass" type="password" class="menu-reg-input">
          <a href="#" class="password-control" onclick="return show_hide_password(this);"></a>
        </div>
      </label>
    </div>
    <!-- /.reg-sailor-inputs -->

    <div class="reg-sailor-end">
      <div class="resume-contact__second">
        <label class="custom-checkbox">
          <input type="checkbox" checked="">
          <span class="checkmark"></span>
          Принимаю <a href="#">условия<br>
          пользовательского соглашения</a>

        </label>
      </div>

      <div class="reg-sailor-buttons">
        <button class="reg-sailor-button reg-sailor-blue">
          Зарегистрироваться
          <span>→</span>
        </button>
        <!-- /.reg-sailor-button -->
        <button @click="closeModal('company');toggleModal('modalSeilorRegLogin');" class="reg-sailor-button about-button-blue">
          Войти
          <span>→</span>
        </button>
        <!-- /.reg-sailor-button --></div>
      <!-- /.reg-sailor-buttons -->
    </div>
    <!-- /.reg-sailor-end -->
  </div>

 
  <div
    :class="['header-overlay', { 'header-overlay__active': isOpen }]"
    @click="closeModal('company')"
  ></div>
</template>

<script setup>
import AfInput from "@/components/uikit/AfInput";
import AfInputPassword from "@/components/uikit/AfInputPassword";
import AfCheckbox from "@/components/uikit/AfCheckbox";
import AfInputUpload from "@/components/uikit/AfInputUpload";
import AfGroupBtn from "@/components/uikit/AfGroupBtn";
import AfCloseModal from "@/components/uikit/AfCloseModal";
import useVuelidate from "@vuelidate/core";
import { required, email, minLength } from "@vuelidate/validators";
import { useModalStore } from "~/store/modal";
const { closeModal, toggleModal } = useModalStore();
const props = defineProps({
  isOpen: {
    type: Boolean,
  },
});

const formData = ref({
  email: "",
  password: "",
  confirm_password: "",
  first_name: "",
  last_name: "",
  patronymic: "",
  phone_number: "",
  company_name: "",
  company_inn: 0,
  company_address: "",
  telegram: "",
  notification_settings: {
    send_email: false,
    send_sms: false,
    send_telegram: false,
    mailing_notification: false,
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

const handleRegistration = () => {
  v$.value.$touch();
  if (!v$.value.$error) {
    signIn(dataToSubmit, "company");
    closeModal("seilor");
  } else {
    console.log("Validation errors:", v$.value.$errors);
  }
};
</script>
