import { defineStore } from 'pinia';

export const useModalStore = defineStore('global/modal', {
  state: () => ({
    modals: {
      lk: false,
      menu: false,
      company: false,
      seilor: false,
      authCompany: false,
      authSeilor: false,
      existingship: false,
      newship: false,
      shipinfo: false,
      errorReporting: false,
      modalResponse: false,
      modalSeilorRegLogin: false
    },
  }),
  actions: {
    toggleModal(modalName) {
      if (this.modals.hasOwnProperty(modalName)) {
        this.modals[modalName] = !this.modals[modalName];
      }
    },
    closeModal(modalName) {
      if (this.modals.hasOwnProperty(modalName)) {
        this.modals[modalName] = false;
      }
    },
    removeAllModals() {
      Object.keys(this.modals).forEach((key) => {
        this.modals[key] = false;
      });
    }
  },
});

export const useModalStoreRefs = () => storeToRefs(useModalStore());
