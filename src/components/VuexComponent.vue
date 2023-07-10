<template>
    <div>
      <h1>{{ user.name }}</h1> 
      <p v-if="loading">Cargando...</p>
      <button @click="fetchUser">Obtener Usuario</button>
    </div>
  </template>
  
  <script>
  import { mapGetters, mapActions } from 'vuex';
  
  export default {
    computed: {
      ...mapGetters('user', ['getUser', 'isLoading']),
      user() {
        return this.getUser;
      },
      loading() {
        return this.isLoading;
      }
    },
  
    methods: {
      ...mapActions('user', ['fetchUser'])
    }
  }
  </script>