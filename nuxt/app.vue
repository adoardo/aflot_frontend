<script setup>
import { useModalStoreRefs, useModalStore } from "~/store/modal";
import { useRoute } from "vue-router";
import ModalMenu from "../components/global/ModalMenu.vue";
import ModalLk from "../components/global/ModalLk.vue";
import ModalRegSeilor from "./components/global/ModalRegSeilor.vue";
import ModalRegCompany from "./components/global/ModalRegCompany.vue";
import MenuAccountCompany from "./components/global/MenuAccountCompany.vue";
import MenuAccountSeilor from "./components/global/MenuAccountSeilor.vue";
import ModalAddExistingShip from "./components/global/ModalAddExistingShip.vue";
import ModalAddNewShip from "./components/global/ModalAddNewShip.vue";
import ModalShipInfo from "./components/global/ModalShipInfo.vue";
import ModalErrorReporting from "./components/global/ModalErrorReporting.vue";
import ModalResponse from "./components/global/ModalResponse.vue";
import ModalSeilorRegLogin from "./components/global/ModalSailorRegLogin.vue";

const route = useRoute();
const { modals } = useModalStoreRefs();
const { removeAllModals } = useModalStore();

watch(route, () => {
  removeAllModals();
});
</script>
<template>
  <NuxtPage />

  <ModalMenu v-show="modals.menu" :is-open="modals.menu" />
  <ModalLk v-show="modals.lk" :is-open="modals.lk" />
  <ModalRegSeilor v-show="modals.seilor" :is-open="modals.seilor" />
  <ModalRegCompany v-show="modals.company" :is-open="modals.company" />
  <MenuAccountCompany v-show="modals.authCompany" :is-open="modals.authCompany" />
  <ModalAddExistingShip v-show="modals.existingship" :is-open="modals.existingship" />
  <ModalAddNewShip v-show="modals.newship" :is-open="modals.newship" />
  <ModalShipInfo v-show="modals.shipinfo" :is-open="modals.shipinfo" />
  <ModalErrorReporting v-show="modals.errorReporting" :is-open="modals.errorReporting" />
  <ModalResponse v-show="modals.modalResponse" :is-open="modals.modalResponse" />
  <ModalSeilorRegLogin v-show="modals.modalSeilorRegLogin" :is-open="modals.modalSeilorRegLogin" />

</template>

<style lang="scss" scoped>
.modal-enter-active,
.modal-leave-active {
  transition: all 0.3s ease;
  transform: translateX(0);
  // opacity: 0;
}

.modal-enter,
.modal-leave-to {
  transform: translateX(1000%);
  // opacity: 1;
}

.page-enter-active,
.page-leave-active {
  transition: all 0.4s;
}
.page-enter-from,
.page-leave-to {
  opacity: 0;
  filter: blur(1rem);
}
</style>
