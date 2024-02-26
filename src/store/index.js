import { defineStore } from 'pinia'
import router from '@/router'
export const authStore = defineStore('auth', {
  state: () => {
    return { 
      user: 0 ,
      token: 0,
      isAuthenticated: false
    }
  }, 

  getters: {
    getAuthentication: (state) => state.isAuthenticated,
    getUser: (state) => state.user,
    getToken: (state) => state.token,
  },

  actions: {
    setUser(user) {
      this.user = user;
    },
    setToken(token){
      this.token = token
    },
    logout() {
      this.user = null;
      this.token = null;
      localStorage.clear();
      sessionStorage.clear();
      // router.push('/login')
    },

    setAuthentication(value) {
      this.isAuthenticated = value;
    }
  },

  persist: true,
})
