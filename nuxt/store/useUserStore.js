import { defineStore } from 'pinia';
import api from '@/api/api'

export const useUsersStore = defineStore('global/user', {
  state: () => ({
    user: {
      info: {
        role: 'unknow'
      }
    }
  }),
  actions: {
    async signIn(user, type) {
      if (type === 'user') {
        const response = await api.post('/register/user', user)
      }
    },
    async login(user) {
      try {
        const { data } = await api.post('/token', user, {
          headers: { 'Content-Type': 'application/x-www-form-urlencoded' }
        })
        this.user = data
      } catch (error) {
        console.log(error);
      };
    },
    async refreshToken(token) {
      console.log('store', token.user)
      try {
        const { data } = await api.post('/refresh_token', token)
        this.user = data
      } catch (error) {
        console.log(error);
      };
    }
  },
  persist: {
    storage: persistedState.localStorage,
  },

});

export const useUsersStoreRefs = () => storeToRefs(useUsersStore());
